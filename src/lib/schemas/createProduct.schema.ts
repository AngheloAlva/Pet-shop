import { z } from "zod"

export const createProductSchema = z.object({
	sku: z.string(),
	categoryId: z.string(),
	petType: z.string(),
	name: z
		.string()
		.min(3, { message: "Name must be at least 3 characters" })
		.max(100, { message: "Name must be less than 100 characters" }),
	slug: z.string(),
	miniDesc: z
		.string()
		.min(3, { message: "Mini description must be at least 3 characters" })
		.max(500, { message: "Mini description must be less than 500 characters" }),
	description: z.array(
		z.object({
			title: z.string().max(100, { message: "Title must be less than 100 characters" }),
			content: z.string().max(5000, { message: "Description must be less than 1000 characters" }),
		})
	),
	brandId: z.string(),
	lifeStage: z.union([
		z.literal("PUPPY"),
		z.literal("ADULT"),
		z.literal("SENIOR"),
		z.literal("KITTEN"),
		z.literal("ALL_LIFE_STAGES"),
	]),
	options: z.array(
		z.object({
			name: z.string().min(3, { message: "Name must be at least 3 characters" }),
			price: z.string().or(z.number()),
			stock: z.string().or(z.number()),
			discount: z.string().or(z.number()),
		})
	),
})
