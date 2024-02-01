import type { ProductCart } from './product-cart.types'

interface Cart {
  id: number
  userId: number
  products: ProductCart[]
  createdAt: Date
}

interface AddProductToCart {
  productId: number
  quantity: number
  optionSelectedIndex: number
}

export {
  type Cart,
  type AddProductToCart
}
