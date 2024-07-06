"use server"

import { CreateAddress, UpdateAddress } from "@/interfaces"
import prisma from "@/lib/prisma"
import { Address } from "@prisma/client"

const createAddress = async ({
	apartmentNumber,
	commune,
	isApartment,
	name,
	number,
	region,
	phone,
	userId,
	street,
	zipCode,
}: CreateAddress): Promise<{ ok: boolean; message?: string; address?: Address }> => {
	try {
		const address = await prisma.address.create({
			data: {
				name,
				userId,
				number,
				phone,
				region,
				street,
				zipCode,
				commune,
				isApartment,
				apartmentNumber,
			},
		})

		return {
			ok: true,
			address,
		}
	} catch (error) {
		return {
			ok: false,
			message: `${error}`,
		}
	}
}

const getAddressByUser = async (
	userId: string
): Promise<{ ok: boolean; message?: string; address?: Address[] }> => {
	try {
		const address = await prisma.address.findMany({
			where: {
				userId,
			},
		})

		return {
			ok: true,
			address,
		}
	} catch (error) {
		return {
			ok: false,
			message: `${error}`,
		}
	}
}

const getAdressById = async (
	id: string
): Promise<{ ok: boolean; message?: string; address?: Address | null }> => {
	try {
		const address = await prisma.address.findUnique({
			where: {
				id: parseInt(id),
			},
		})

		return {
			ok: true,
			address,
		}
	} catch (error) {
		return {
			ok: false,
			message: `${error}`,
		}
	}
}

const updateAddress = async (
	id: number,
	{ apartmentNumber, commune, isApartment, name, number, region, street, zipCode }: UpdateAddress
): Promise<{ ok: boolean; message?: string; address?: Address | null }> => {
	try {
		const address = await prisma.address.update({
			where: {
				id,
			},
			data: {
				name,
				number,
				region,
				street,
				zipCode,
				commune,
				isApartment,
				apartmentNumber,
			},
		})

		return {
			ok: true,
			address,
		}
	} catch (error) {
		return {
			ok: false,
			message: `${error}`,
		}
	}
}

const deleteAddress = async (id: number): Promise<{ ok: boolean; message?: string }> => {
	try {
		await prisma.address.delete({
			where: {
				id,
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

export { getAdressById, createAddress, updateAddress, deleteAddress, getAddressByUser }
