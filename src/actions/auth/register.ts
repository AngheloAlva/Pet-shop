"use server"

import bcryptjs from "bcryptjs"
import prisma from "@/lib/prisma"

interface RegisterProps {
	name: string
	lastName: string
	email: string
	password: string
	rut: string
}

export const registerUser = async ({ email, name, password, rut, lastName }: RegisterProps) => {
	try {
		const user = await prisma.user.create({
			data: {
				name,
				rut,
				lastName,
				email: email.toLowerCase(),
				password: bcryptjs.hashSync(password),
			},
			select: {
				id: true,
				name: true,
				email: true,
			},
		})

		return {
			ok: true,
			user,
			message: "Usuario creado con exito",
		}
	} catch (error) {
		console.log(error)
		return {
			ok: false,
			message: "Error al crear usuario",
		}
	}
}
