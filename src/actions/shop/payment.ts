"use server"

import { CreatePayment } from "@/interfaces"
import prisma from "@/lib/prisma"

const createCheckoutSession = async ({
	total,
	status,
	userId,
	subtotal,
	currency,
	shippingCost,
	shippingMethod,
}: CreatePayment): Promise<{ ok: boolean; orderId?: number; message?: string }> => {
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
			},
			select: {
				id: true,
			},
		})

		if (order === null) throw new Error("Order not created")

		await prisma.payment.create({
			data: {
				status,
				currency,
				amount: total,
				order: {
					connect: {
						id: order.id,
					},
				},
			},
		})

		return {
			ok: true,
			orderId: order.id,
		}
	} catch (error) {
		return {
			ok: false,
			message: `${error}`,
		}
	}
}

export { createCheckoutSession }
