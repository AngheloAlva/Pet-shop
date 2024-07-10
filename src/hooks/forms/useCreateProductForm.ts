import { type FieldValues, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import type { z } from "zod"
import { createProductSchema } from "@/lib"

interface UseFormReturn<T extends FieldValues> {
	form: ReturnType<typeof useForm<T>>
}

export const useCreateProductForm = (
	defaulValues?: z.infer<typeof createProductSchema>
): UseFormReturn<z.infer<typeof createProductSchema>> => {
	const form = useForm<z.infer<typeof createProductSchema>>({
		resolver: zodResolver(createProductSchema),
		defaultValues: defaulValues ?? {
			brandId: "",
			categoryId: "",
			description: [
				{
					title: "",
					content: "",
				},
			],
			lifeStage: "PUPPY",
			miniDesc: "",
			name: "",
			options: [
				{
					discount: "",
					name: "",
					price: "",
					stock: "",
				},
			],
			petType: "",
			slug: "",
		},
	})

	return {
		form,
	}
}
