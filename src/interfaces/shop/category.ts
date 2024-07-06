import type { PetType } from "@prisma/client"

export interface CreateCategory {
	description: string
	image: string
	name: string
	slug: string
	petType: PetType
}

export interface UpdateCategory {
	description: string
	image: string
	name: string
	slug: string
	petType: PetType
}
