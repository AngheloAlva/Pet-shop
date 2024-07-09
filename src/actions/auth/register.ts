"use server"

import prisma from "@/lib/prisma"
import bcryptjs from "bcryptjs"

interface RegisterProps {
	rut: string
	name: string
	email: string
	bornDate: Date
	lastName: string
	password: string
}

export const registerUser = async ({
	rut,
	name,
	email,
	password,
	lastName,
	bornDate,
}: RegisterProps) => {
	try {
		const user = await prisma.user.create({
			data: {
				name,
				rut,
				lastName,
				bornDate,
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
