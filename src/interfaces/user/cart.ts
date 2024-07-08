import type { Option, Product } from "@prisma/client"

export interface ProductCart {
	id: number
	price: number
	quantity: number
	productId: number
	product: ProductInCart
	optionSelectedIndex: number
}

export interface ProductInCart extends Product {
	options: Option[]
}
