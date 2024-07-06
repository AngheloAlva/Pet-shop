"use server"

import type { CreateBrand, UpdateBrand, GetAllOfModel } from "@/interfaces"
import type { Brand } from "@prisma/client"

import prisma from "@/lib/prisma"

export const createBrand = async ({
	image,
	name,
	slug,
}: CreateBrand): Promise<{ ok: boolean; data?: Brand; message?: string }> => {
	try {
		const brand = await prisma.brand.create({
			data: {
				image,
				name,
				slug,
			},
		})

		return {
			ok: true,
			data: brand,
		}
	} catch (error) {
		return {
			ok: false,
			message: `${error}`,
		}
	}
}

export const getBrands = async ({
	isAvailable,
	limit,
	page,
}: GetAllOfModel): Promise<{ ok: boolean; total: number; brands?: Brand[]; message?: string }> => {
	try {
		const [total, brands] = await Promise.all([
			prisma.brand.count(),
			prisma.brand.findMany({
				where: {
					isAvailable,
				},
				skip: (page - 1) * limit,
				take: limit,
			}),
		])

		return {
			ok: true,
			total,
			brands,
		}
	} catch (error) {
		return {
			ok: false,
			total: 0,
			message: `${error}`,
		}
	}
}

export const getBrandById = async (
	brandId: number
): Promise<{ ok: boolean; data?: Brand | null; message?: string }> => {
	try {
		const brand = await prisma.brand.findUnique({
			where: {
				id: brandId,
			},
		})

		return {
			ok: true,
			data: brand,
		}
	} catch (error) {
		return {
			ok: false,
			message: `${error}`,
		}
	}
}

export const getBrandBySlug = async (
	slug: string
): Promise<{ ok: boolean; data?: Brand | null; message?: string }> => {
	try {
		const brand = await prisma.brand.findUnique({
			where: {
				slug,
			},
		})

		return {
			ok: true,
			data: brand,
		}
	} catch (error) {
		return {
			ok: false,
			message: `${error}`,
		}
	}
}

export const updateBrand = async (
	brandId: number,
	{ image, name, slug }: UpdateBrand
): Promise<{ ok: boolean; data?: Brand; message?: string }> => {
	try {
		const brand = await prisma.brand.update({
			where: {
				id: brandId,
			},
			data: {
				image,
				name,
				slug,
			},
		})

		return {
			ok: true,
			data: brand,
		}
	} catch (error) {
		return {
			ok: false,
			message: `${error}`,
		}
	}
}

export const activateBrand = async (
	brandId: number
): Promise<{ ok: boolean; message?: string }> => {
	try {
		await prisma.brand.update({
			where: {
				id: brandId,
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

export const deleteBrand = async (brandId: number): Promise<{ ok: boolean; message?: string }> => {
	try {
		await prisma.brand.update({
			where: {
				id: brandId,
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
