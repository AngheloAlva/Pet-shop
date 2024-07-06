import { create } from "zustand"

import type { ProductCart } from "@/interfaces"

interface CartState {
	products: ProductCart[]
	addProduct: (product: ProductCart) => void
	removeProduct: (productId: number, optionSelectedIndex: number) => void
	updateCartState: (products: ProductCart[]) => void
	increaseQuantity: (productId: number, optionSelectedIndex: number) => void
	decreaseQuantity: (productId: number, optionSelectedIndex: number) => void
	clearCart: () => void
}

export const useCartStore = create<CartState>((set) => ({
	products: [],

	addProduct: (newProduct) => {
		set((state: CartState) => {
			const index = state.products.findIndex(
				(p) =>
					p.productId === newProduct.productId &&
					p.optionSelectedIndex === newProduct.optionSelectedIndex
			)

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
			products: state.products.filter(
				(product) =>
					!(product.productId === productId && product.optionSelectedIndex === optionSelectedIndex)
			),
		}))
	},

	updateCartState: (products) => {
		set({ products })
	},

	increaseQuantity: (productId, optionSelectedIndex) => {
		set((state) => {
			const updatedProducts = state.products.map((product) => {
				if (
					product.productId === productId &&
					product.optionSelectedIndex === optionSelectedIndex
				) {
					return { ...product, quantity: product.quantity + 1 }
				}
				return product
			})

			return { products: updatedProducts }
		})
	},

	decreaseQuantity: (productId, optionSelectedIndex) => {
		set((state) => {
			const updatedProducts = state.products.map((product) => {
				if (
					product.productId === productId &&
					product.optionSelectedIndex === optionSelectedIndex
				) {
					const newQuantity = product.quantity - 1
					if (newQuantity < 1) {
						return product
					}
					return { ...product, quantity: newQuantity }
				}
				return product
			})

			return { products: updatedProducts }
		})
	},

	clearCart: () => {
		set({ products: [] })
	},
}))
