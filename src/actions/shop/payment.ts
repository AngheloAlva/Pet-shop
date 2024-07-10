"use server"

import { CreatePayment } from "@/interfaces"
import prisma from "@/lib/prisma"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
	apiVersion: "2024-06-20",
})

const createCheckoutSession = async ({
	cart,
	total,
	status,
	userId,
	subtotal,
	currency,
	shippingCost,
	shippingMethod,
}: CreatePayment): Promise<{ ok: boolean; url?: string; orderId?: number; message?: string }> => {
	try {
		const address = await prisma.address.findFirst({
			where: {
				userId,
			},
		})

		if (address === null) throw new Error("Address not found")
		const addressToOrder = `${address.street}, ${address.commune}, ${address.region}, ${address.zipCode}`

		const order = await prisma.order.create({
			data: {
				total,
				subtotal,
				shippingCost,
				shippingMethod,
				address: addressToOrder,
				user: { connect: { id: userId } },
				payment: {
					create: {
						status,
						currency,
						amount: total,
					},
				},
			},
			select: {
				id: true,
			},
		})

		if (order === null) throw new Error("Order not created")

		const lineItems = []
		let totalPrice: number = 0

		for (const item of cart) {
			const product = await prisma.product.findFirst({
				where: {
					id: item.productId,
				},
				include: {
					options: true,
				},
			})

			if (product === null) throw new Error("Product not found")

			totalPrice += product.options[item.optionSelectedIndex].price

			let price = product.options[item.optionSelectedIndex].price
			if (product.options[item.optionSelectedIndex].discount > 0) {
				const discount = product.options[item.optionSelectedIndex].discount
				price = price - price * (discount / 100)
			}

			lineItems.push({
				price_data: {
					currency: "clp",
					product_data: {
						name: product.name + " - " + product.options[item.optionSelectedIndex].name,
						description: product.miniDesc,
					},
					unit_amount: price,
				},
				quantity: item.quantity,
			})

			await prisma.orderItem.create({
				data: {
					sku: product.sku,
					quantity: item.quantity,
					productName: product.name,
					productImage: product.images[0],
					productPrice: product.options[item.optionSelectedIndex].price,
					productDiscount: product.options[item.optionSelectedIndex].discount,
					optionSelected: item.optionSelectedIndex,
					product: { connect: { id: product.id } },
					order: { connect: { id: order.id } },
				},
			})
		}

		totalPrice += shippingCost

		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			line_items: lineItems,
			mode: "payment",
			success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/order/${order.id}`,
			cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
		})

		if (session == null) throw new Error("Session not created")
		if (session.url == null) throw new Error("Session URL not created")

		await prisma.order.update({
			where: {
				id: order.id,
			},
			data: {
				payment: {
					update: {
						amount: totalPrice,
						stripeSessionId: session.id,
					},
				},
			},
		})

		return {
			ok: true,
			url: session.url,
			orderId: order.id,
		}
	} catch (error) {
		console.log(error)
		return {
			ok: false,
			message: `${error}`,
		}
	}
}

export { createCheckoutSession }
