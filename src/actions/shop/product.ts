"use server"

import prisma from "@/lib/prisma"

import type {
	CreateProduct,
	UpdateProduct,
	GetProductResponse,
	GetProductsWithFilters,
} from "@/interfaces"
import type { Product } from "@prisma/client"

const createProduct = async ({
	sku,
	slug,
	name,
	images,
	options,
	petType,
	brandId,
	miniDesc,
	lifeStage,
	categoryId,
	description,
}: CreateProduct): Promise<{ ok: boolean; data?: Product; message?: string }> => {
	try {
		const product = await prisma.product.create({
			data: {
				sku,
				name,
				slug,
				images,
				brandId,
				petType,
				miniDesc,
				lifeStage,
				categoryId,
				description,
				options: {
					create: options,
				},
			},
		})

		return {
			ok: true,
			data: product,
		}
	} catch (error) {
		return {
			ok: false,
			message: `${error}`,
		}
	}
}

const getProducts = async ({
	page,
	limit,
	search,
	petType,
	maxPrice,
	minPrice,
	lifeStage,
	brandSlug,
	isAvailable,
	categorySlug,
}: GetProductsWithFilters): Promise<{
	ok: boolean
	products?: GetProductResponse[]
	total: number
	message?: string
}> => {
	try {
		const filters: any = {
			isAvailable,
		}

		if (petType != null) {
			filters.petType = { has: petType }
		}
		if (lifeStage != null) filters.lifeStage = lifeStage
		if (brandSlug != null) filters.brand = { slug: brandSlug }
		if (minPrice != null) filters.price = { gte: Number(minPrice) }
		if (categorySlug != null) filters.category = { slug: categorySlug }
		if (maxPrice != null) filters.price = { ...filters.price, lte: Number(maxPrice) }

		if (search != null) {
			filters.OR = [
				{ name: { contains: search, mode: "insensitive" } },
				{ description: { contains: search, mode: "insensitive" } },
			]
		}

		const [total, products] = await Promise.all([
			prisma.product.count({ where: filters }),
			prisma.product.findMany({
				where: filters,
				include: {
					brand: true,
					category: true,
					options: true,
				},
				skip: (page - 1) * limit,
				take: limit,
			}),
		])

		return {
			ok: true,
			total,
			products,
		}
	} catch (error) {
		return {
			ok: false,
			message: `${error}`,
			total: 0,
		}
	}
}

const getProductById = async (
	id: number
): Promise<{ ok: boolean; data?: GetProductResponse | null; message?: string }> => {
	try {
		const product = await prisma.product.findUnique({
			where: {
				id,
			},
			include: {
				brand: true,
				category: true,
				options: true,
			},
		})

		return {
			ok: true,
			data: product,
		}
	} catch (error) {
		return {
			ok: false,
			message: `${error}`,
		}
	}
}

const getProductBySlug = async (
	slug: string
): Promise<{ ok: boolean; data?: Product | null; message?: string }> => {
	try {
		const product = await prisma.product.findUnique({
			where: {
				slug,
			},
			include: {
				brand: true,
				category: true,
				options: true,
			},
		})

		return {
			ok: true,
			data: product,
		}
	} catch (error) {
		return {
			ok: false,
			message: `${error}`,
		}
	}
}

const updateProduct = async ({
	brandId,
	categoryId,
	description,
	images,
	lifeStage,
	miniDesc,
	name,
	petType,
	slug,
	productId,
}: UpdateProduct): Promise<{ ok: boolean; data?: Product; message?: string }> => {
	try {
		const product = await prisma.product.update({
			where: {
				id: Number(productId),
			},
			data: {
				brandId: Number(brandId),
				categoryId: Number(categoryId),
				description,
				images,
				lifeStage,
				miniDesc,
				name,
				petType,
				slug,
			},
		})

		return {
			ok: true,
			data: product,
		}
	} catch (error) {
		return {
			ok: false,
			message: `${error}`,
		}
	}
}

const deleteProduct = async (id: number): Promise<{ ok: boolean; message?: string }> => {
	try {
		await prisma.product.update({
			where: {
				id,
			},
			data: {
				isAvailable: false,
			},
		})

		return {
			ok: true,
		}
	} catch (error) {
		return {
			ok: false,
			message: `${error}`,
		}
	}
}

const activateProduct = async (id: number): Promise<{ ok: boolean; message?: string }> => {
	try {
		await prisma.product.update({
			where: {
				id,
			},
			data: {
				isAvailable: true,
			},
		})

		return {
			ok: true,
		}
	} catch (error) {
		return {
			ok: false,
			message: `${error}`,
		}
	}
}

export {
	getProducts,
	createProduct,
	updateProduct,
	deleteProduct,
	getProductById,
	activateProduct,
	getProductBySlug,
}
