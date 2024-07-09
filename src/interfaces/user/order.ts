import type { Order, OrderItem, Payment } from "@prisma/client"

export interface OrderResponse extends Order {
	payment: Payment | null
	items: OrderItem[]
}
