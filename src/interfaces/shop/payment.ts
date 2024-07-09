import type { PaymentStatus, ShippingMethod } from "@prisma/client"

export interface CreatePayment {
	currency: string
	status: PaymentStatus
	userId: string
	subtotal: number
	total: number
	shippingCost: number
	shippingMethod: ShippingMethod
}
