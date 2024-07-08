import { z } from "zod"

export const addressFormSchema = z.object({
	name: z.string().min(3).max(25),
	street: z.string().min(3).max(70),
	number: z.string().min(2).max(10),
	zipCode: z.string().min(3).max(10),
	phone: z.string().min(9).max(15),
	commune: z.string(),
	region: z.string(),
	isApartment: z.boolean(),
	apartmentNumber: z.string().optional(),
})
