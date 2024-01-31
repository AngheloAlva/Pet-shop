import type { ProductCart } from '../user/product-cart.types'
import type { Order } from '../user/order.types'

interface Payment {
  id: number
  order?: Order
  orderId: number
  amount: number
  currency: string
  stripeSessionId?: string | null | undefined
  status: 'PENDING' | 'PAID' | 'FAILED'
  createdAt: Date
}

interface CreatePayment {
  userId: number
  productsCart: ProductCart[]
  orderId: number
  shippingMethod: 'CHILEXPRESS' | 'STARKEN' | 'CORREOS_CHILE' | 'SHOP_PICKUP'
}

export {
  type Payment,
  type CreatePayment
}
