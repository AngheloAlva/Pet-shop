import type { Option, Product } from "@prisma/client"

export interface ProductCart {
	id: number
	quantity: number
	product: ProductInCart
	productId: number
	optionSelectedIndex: number
}

export interface ProductInCart extends Product {
	options: Option[]
}
