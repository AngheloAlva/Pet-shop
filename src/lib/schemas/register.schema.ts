import { z } from "zod"

const rutRegex = /^\d{1,2}\.\d{3}\.\d{3}-[0-9kK]$/

export const registerSchema = z.object({
	rut: z.string().regex(rutRegex),
	email: z.string().email(),
	password: z.string().min(6),
	name: z.string().min(3),
	lastName: z.string().min(3),
	bornDate: z.date().max(new Date()),
})
