import { z } from "zod"

export const createCategorySchema = z.object({
	image: z.string(),
	name: z
		.string()
		.min(3, { message: "Name must be at least 3 characters long" })
		.max(50, { message: "Name must be at most 50 characters long" }),
	slug: z.string(),
	description: z
		.string()
		.min(3, { message: "Description must be at least 3 characters long" })
		.max(1000, { message: "Description must be at most 200 characters long" }),
	petType: z.enum(["DOG", "CAT", "BIRD", "FISH", "REPTILE", "SMALL_ANIMAL"]),
})
