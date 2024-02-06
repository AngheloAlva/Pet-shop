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
  authId: string
  productsCart: ProductCart[]
  shippingMethod: ShippingMethod['method']
}

interface ShippingMethod {
  method: 'CHILEXPRESS' | 'STARKEN' | 'CORREOS_CHILE' | 'SHOP_PICKUP'
  price: number
}

export {
  type Payment,
  type CreatePayment,
  type ShippingMethod
}
