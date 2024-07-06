"use server"

import { CreatePayment } from "@/interfaces"
import prisma from "@/lib/prisma"

const createCheckoutSession = async ({
	amount,
	currency,
	status,
	order,
}: CreatePayment): Promise<{ ok: boolean; data?: string; message?: string }> => {
	try {
		await prisma.payment.create({
			data: {
				amount,
				currency,
				status,
				order: {
					connect: {
						id: order,
					},
				},
			},
		})

		return {
			ok: true,
		}
	} catch (error) {
		return {
			ok: false,
			message: `${error}`,
		}
	}
}

export { createCheckoutSession }
