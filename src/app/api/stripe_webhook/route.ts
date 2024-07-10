import { prisma } from "@/lib"
import { NextResponse } from "next/server"
import Stripe from "stripe"

export async function POST(req: Request) {
	try {
		const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
			apiVersion: "2024-06-20",
		})

		const { event } = await req.json()

		if (event.type === "checkout.session.completed") {
			const session = event.data.object

			const order = await prisma.order.findFirst({
				where: {
					checkoutSessionId: session.id,
				},
				include: {
					items: true,
				},
			})

			if (order == null) {
				return NextResponse.json({
					status: 404,
					body: { message: "Order not found" },
				})
			}

			for (const item of order.items) {
				const product = await prisma.product.findUnique({
					where: {
						id: item.productId,
					},
					include: {
						options: true,
					},
				})
				if (product == null) throw new Error("Product not found")

				await prisma.option.update({
					where: {
						id: product.options[item.optionSelected].id,
					},
					data: {
						stock: {
							decrement: item.quantity,
						},
					},
				})
			}

			await prisma.order.update({
				where: {
					id: order.id,
				},
				data: {
					paid: true,
				},
			})

			await prisma.payment.update({
				where: {
					orderId: order.id,
				},
				data: {
					status: "PAID",
				},
			})

			return NextResponse.json({
				status: 200,
				body: { message: "Order paid" },
			})
		}
	} catch (error) {
		return NextResponse.json({
			status: 500,
			body: { message: "Internal server error" },
		})
	}
}
