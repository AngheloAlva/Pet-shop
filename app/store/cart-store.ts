/* eslint-disable array-callback-return */
import { create } from 'zustand'

import type { ProductCart } from '@/types/user/product-cart.types'

interface CartState {
  products: ProductCart[]
  addProduct: (product: ProductCart) => void
  removeProduct: (productId: number, optionSelectedIndex: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>((set) => ({
  products: [],

  addProduct: (newProduct) => {
    set((state: CartState) => {
      const index = state.products.findIndex(p => p.productId === newProduct.productId && p.optionSelectedIndex === newProduct.optionSelectedIndex)

      if (index > -1) {
        const updatedProducts = state.products.map((product, i) => {
          if (i === index) {
            return { ...product, quantity: newProduct.quantity }
          }
          return product
        })

        return { products: updatedProducts }
      } else {
        return { products: [...state.products, newProduct] }
      }
    })
  },

  removeProduct: (productId, optionSelectedIndex) => {
    set((state) => ({
      products: state.products.filter((product) =>
        !(product.productId === productId && product.optionSelectedIndex === optionSelectedIndex))
    }))
  },

  clearCart: () => {
    set({ products: [] })
  }
}))
