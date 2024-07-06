import type { Brand, Category, LifeStage, Option, PetType, Product } from "@prisma/client"
import type { GetAllOfModel } from "../shared"

export interface CreateProduct {
	brandId: number
	categoryId: number
	sku: string
	description: string
	images: string[]
	lifeStage: LifeStage
	miniDesc: string
	name: string
	options: CreateOption[]
	petType: PetType[]
	slug: string
}

export interface CreateOption {
	name: string
	price: number
	stock: number
	discount: number
}

export interface GetProductsWithFilters extends GetAllOfModel {
	search: string | null
	petType: PetType | null
	maxPrice: number | null
	minPrice: number | null
	lifeStage: LifeStage | null
	brandSlug: string | null
	categorySlug: string | null
}

export interface GetProductByIdResponse extends Product {
	category: Category
	brand: Brand
	options: Option[]
}

export interface UpdateProduct {
	brandId: string
	categoryId: string
	description: string
	images: string[]
	lifeStage: LifeStage
	miniDesc: string
	name: string
	petType: PetType[]
	slug: string
	productId: string
}
