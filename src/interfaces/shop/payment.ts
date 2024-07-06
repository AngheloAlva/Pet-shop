import type { PaymentStatus, ShippingMethod } from "@prisma/client"

export interface CreatePayment {
	amount: number
	currency: string
	status: PaymentStatus
	order: number
}
