import { persist } from "zustand/middleware"
import { create } from "zustand"

import type { ProductCart } from "@/interfaces"

interface CartState {
	cart: ProductCart[]
	addProduct: (product: ProductCart) => void
	getSummaryInformation: (shippingPrice: number) => {
		total: number
		subTotal: number
		productsInCart: number
	}
	getTotalItems: () => number
	removeProduct: (productId: number, optionSelectedIndex: number) => void
	updateProductQuantity: (product: ProductCart, quantity: number) => void
	clearCart: () => void
}

export const useCartStore = create<CartState>()(
	persist(
		(set, get) => ({
			cart: [],

			addProduct: (product: ProductCart) => {
				const { cart } = get()

				const productInCart = cart.some(
					(item) =>
						item.id === product.id && item.optionSelectedIndex === product.optionSelectedIndex
				)

				if (!productInCart) {
					set({ cart: [...cart, product] })
					return
				}

				const updatedCartProducts = cart.map((item) => {
					if (item.id === product.id && item.optionSelectedIndex === product.optionSelectedIndex) {
						return { ...item, quantity: item.quantity + product.quantity }
					}

					return item
				})

				set({ cart: updatedCartProducts })
			},

			getTotalItems: () => {
				const { cart } = get()

				return cart.reduce((total, item) => total + item.quantity, 0)
			},

			getSummaryInformation: (shippingPrice: number) => {
				const { cart } = get()

				const subTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
				const total = subTotal + shippingPrice
				const productsInCart = cart.reduce((total, item) => total + item.quantity, 0)

				return {
					total,
					subTotal,
					productsInCart,
				}
			},

			updateProductQuantity: (product: ProductCart, quantity: number) => {
				const { cart } = get()

				const updatedCartProducts = cart.map((item) => {
					if (item.id === product.id && item.optionSelectedIndex === product.optionSelectedIndex) {
						return { ...item, quantity }
					}

					return item
				})

				set({ cart: updatedCartProducts })
			},

			removeProduct: (productId, optionSelectedIndex) => {
				const { cart } = get()

				const updatedCartProducts = cart.filter(
					(item) => item.id !== productId || item.optionSelectedIndex !== optionSelectedIndex
				)

				set({ cart: updatedCartProducts })
			},

			clearCart: () => {
				set({ cart: [] })
			},
		}),
		{
			name: "cart",
		}
	)
)
