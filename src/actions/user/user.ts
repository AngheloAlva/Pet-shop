"use server"

import { GetAllOfModel, UpdateUser } from "@/interfaces"
import prisma from "@/lib/prisma"
import { User } from "@prisma/client"

const getUsers = async ({
	isAvailable,
	limit,
	page,
}: GetAllOfModel): Promise<{ ok: boolean; total: number; users?: User[] }> => {
	try {
		const [total, users] = await Promise.all([
			prisma.user.count({
				where: {
					isActive: isAvailable,
				},
			}),
			await prisma.user.findMany({
				where: {
					isActive: isAvailable,
				},
				take: limit,
				skip: page * limit,
			}),
		])

		return {
			ok: true,
			users,
			total,
		}
	} catch (error) {
		return {
			ok: false,
			total: 0,
		}
	}
}

const updateUser = async (
	id: string,
	{ lastName, name, password }: UpdateUser
): Promise<{ ok: boolean; message?: string; user?: User }> => {
	try {
		const user = await prisma.user.update({
			where: {
				id,
			},
			data: {
				lastName,
				name,
				password,
			},
		})

		return {
			ok: true,
			user,
		}
	} catch (error) {
		return {
			ok: false,
			message: `${error}`,
		}
	}
}

const activateUser = async (id: string): Promise<{ ok: boolean; message?: string }> => {
	try {
		await prisma.user.update({
			where: {
				id,
			},
			data: {
				isActive: true,
			},
		})

		return { ok: true }
	} catch (error) {
		return {
			ok: false,
			message: `${error}`,
		}
	}
}

const deleteUser = async (id: string): Promise<{ ok: boolean; message?: string }> => {
	try {
		await prisma.user.delete({
			where: {
				id,
			},
		})

		return { ok: true }
	} catch (error) {
		return {
			ok: false,
			message: `${error}`,
		}
	}
}

export { getUsers, updateUser, deleteUser, activateUser }
