"use client"

import { type FieldValues, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { createCategorySchema } from "@/lib"

import type { z } from "zod"

interface UseFormReturn<T extends FieldValues> {
	form: ReturnType<typeof useForm<T>>
}

export const useCreateCategoryForm = (
	defaulValues?: z.infer<typeof createCategorySchema>
): UseFormReturn<z.infer<typeof createCategorySchema>> => {
	const form = useForm<z.infer<typeof createCategorySchema>>({
		resolver: zodResolver(createCategorySchema),
		defaultValues: defaulValues ?? {
			description: "",
			name: "",
			petType: "DOG",
			slug: "",
		},
	})

	return {
		form,
	}
}
