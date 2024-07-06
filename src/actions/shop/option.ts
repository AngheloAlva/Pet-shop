"use server"

import type { UpdateOption } from "@/interfaces"

import prisma from "@/lib/prisma"

const updateOption = async (
	id: number,
	{ discount, price, stock }: UpdateOption
): Promise<{ ok: boolean; message?: string }> => {
	try {
		prisma.option.update({
			where: {
				id,
			},
			data: {
				discount,
				price,
				stock,
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

const deleteOption = async (id: number): Promise<{ ok: boolean; message?: string }> => {
	try {
		prisma.option.delete({
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

export { updateOption, deleteOption }
