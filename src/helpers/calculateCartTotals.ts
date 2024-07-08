import { calculateDiscount } from "./calculateDiscounts"
import { ProductCart } from "@/interfaces"

interface CalculateCartTotalsResponse {
	totalDiscount: number
	totalPriceBeforeDiscount: number
	totalPriceAfterDiscount: number
}

export const calculateCartTotals = (
	productsCart: ProductCart[],
	shippingCost: number
): CalculateCartTotalsResponse => {
	let totalDiscount = 0
	let totalPriceBeforeDiscount = 0
	let totalPriceAfterDiscount = 0

	productsCart.forEach((productCart) => {
		const { price, discount } = productCart.product.options[productCart.optionSelectedIndex]
		const priceWithDiscount = calculateDiscount(price, discount)
		const discountAmount = (price - priceWithDiscount) * productCart.quantity
		const productTotalBeforeDiscount = price * productCart.quantity
		const productTotalAfterDiscount = priceWithDiscount * productCart.quantity

		totalDiscount += discountAmount
		totalPriceBeforeDiscount += productTotalBeforeDiscount
		totalPriceAfterDiscount += productTotalAfterDiscount
	})

	totalPriceAfterDiscount += shippingCost

	return {
		totalDiscount,
		totalPriceBeforeDiscount,
		totalPriceAfterDiscount,
	}
}
