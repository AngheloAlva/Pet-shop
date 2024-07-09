import { persist } from "zustand/middleware"
import { shippingMethods } from "@/lib"
import { create } from "zustand"

interface CheckoutState {
	shippingMethod: {
		method: "CHILEXPRESS" | "STARKEN" | "CORREOS_CHILE" | "SHOP_PICKUP"
		price: number
	}
	updateShippingMethod: (
		method: "CHILEXPRESS" | "STARKEN" | "CORREOS_CHILE" | "SHOP_PICKUP"
	) => void
	haveAddress: boolean
	setHaveAddress: (value: boolean) => void
	isLoading: boolean
	setIsLoading: (value: boolean) => void
}

export const useCheckoutStore = create<CheckoutState>()(
	persist(
		(set, get) => ({
			haveAddress: false,

			shippingMethod: {
				method: "CHILEXPRESS",
				price: shippingMethods.find((m) => m.method === "CHILEXPRESS")?.price ?? 0,
			},

			updateShippingMethod: (method) => {
				const price = shippingMethods.find((m) => m.method === method)?.price ?? 0

				set({
					shippingMethod: {
						method,
						price,
					},
				})
			},

			setHaveAddress: (value) => {
				set({ haveAddress: value })
			},
			isLoading: false,
			setIsLoading: (value) => {
				set({ isLoading: value })
			},
		}),
		{
			name: "checkout",
		}
	)
)
