import type { Payment } from '../shop/payment.types'
import type { OrderItem } from './order-item.types'
import type { Address } from './address.types'

interface Order {
  id: number
  userId: number
  orderDate: Date
  shippingMethod: 'CHILEXPRESS' | 'STARKEN' | 'CORREOS_CHILE' | 'SHOP_PICKUP'
  addressId: number
  address: Address
  paid: boolean
  checkoutSessionId?: string | null
  items: OrderItem[]
  payment?: Payment | null | undefined
}

interface CreateOrder {
  userId: number
  shippingMethod: 'CHILEXPRESS' | 'STARKEN' | 'CORREOS_CHILE' | 'SHOP_PICKUP'
  addressId: number
  cartId: number
}

export {
  type Order,
  type CreateOrder
}
