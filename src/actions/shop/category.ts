"use server"

import type { CreateCategory, GetAllOfModel, UpdateCategory } from "@/interfaces"
import type { Category } from "@prisma/client"

import prisma from "@/lib/prisma"

const createCategory = async ({
	description,
	image,
	name,
	slug,
	petType,
}: CreateCategory): Promise<{ ok: boolean; data?: Category; message?: string }> => {
	try {
		const cateogry = await prisma.category.create({
			data: {
				description,
				image,
				name,
				slug,
				petType,
			},
		})

		return {
			ok: true,
			data: cateogry,
		}
	} catch (error) {
		return {
			ok: false,
			message: `${error}`,
		}
	}
}

const getCategories = async ({
	isAvailable,
	limit,
	page,
}: GetAllOfModel): Promise<{
	ok: boolean
	total: number
	categories?: Category[]
	message?: string
}> => {
	try {
		const [total, categories] = await Promise.all([
			prisma.category.count(),
			prisma.category.findMany({
				where: {
					isAvailable,
				},
				take: limit,
				skip: page * limit,
			}),
		])

		return {
			ok: true,
			total,
			categories,
		}
	} catch (error) {
		return {
			ok: false,
			total: 0,
			message: `${error}`,
		}
	}
}

const getCategoryById = async (
	categoryId: number
): Promise<{ ok: boolean; data?: Category | null; message?: string }> => {
	try {
		const category = await prisma.category.findUnique({
			where: {
				id: categoryId,
			},
		})

		return {
			ok: true,
			data: category,
		}
	} catch (error) {
		return {
			ok: false,
			message: `${error}`,
		}
	}
}

const getCategoryBySlug = async (
	slug: string
): Promise<{ ok: boolean; data?: Category | null; message?: string }> => {
	try {
		const category = await prisma.category.findUnique({
			where: {
				slug,
			},
		})

		return {
			ok: true,
			data: category,
		}
	} catch (error) {
		return {
			ok: false,
			message: `${error}`,
		}
	}
}

const updateCategory = async (
	categoryId: number,
	{ description, image, name, slug, petType }: UpdateCategory
): Promise<{ ok: boolean; data?: Category | null; message?: string }> => {
	try {
		const category = await prisma.category.update({
			where: {
				id: categoryId,
			},
			data: {
				description,
				image,
				name,
				slug,
				petType,
			},
		})

		return {
			ok: true,
			data: category,
		}
	} catch (error) {
		return {
			ok: false,
			message: `${error}`,
		}
	}
}

const activateCategory = async (categoryId: number): Promise<{ ok: boolean; message?: string }> => {
	try {
		prisma.category.update({
			where: {
				id: categoryId,
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

const deleteCategory = async (categoryId: number): Promise<{ ok: boolean; message?: string }> => {
	try {
		prisma.category.update({
			where: {
				id: categoryId,
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

export {
	getCategories,
	updateCategory,
	deleteCategory,
	createCategory,
	getCategoryById,
	activateCategory,
	getCategoryBySlug,
}
