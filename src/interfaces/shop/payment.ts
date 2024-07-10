import type { PaymentStatus, ShippingMethod } from "@prisma/client"
import type { ProductCart } from "@/interfaces"

export interface CreatePayment {
	currency: string
	status: PaymentStatus
	userId: string
	subtotal: number
	total: number
	shippingCost: number
	cart: ProductCart[]
	shippingMethod: ShippingMethod
}
