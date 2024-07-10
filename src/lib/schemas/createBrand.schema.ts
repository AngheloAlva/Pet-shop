import { z } from "zod"

export const createBrandSchema = z.object({
	image: z.string(),
	name: z
		.string()
		.min(3, { message: "Name must be at least 3 characters long" })
		.max(50, { message: "Name must be at most 50 characters long" }),
	slug: z.string(),
})
