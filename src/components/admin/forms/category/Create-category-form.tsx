"use client"

import { useCreateCategoryForm } from "@/hooks"
import { createCategorySchema } from "@/lib"
import { useRouter } from "next/navigation"
import { createCategory } from "@/actions"
import { useState } from "react"

import PetTypeSelectField from "../product/Pet-type-select-field"
import GenericTextAreaField from "../GenericTextAreaField"
import { Button, Form, useToast } from "@/components/ui"
import GenericField from "../GenericField"
import ImageField from "./Image-field"

import type { z } from "zod"

function CreateCategoryForm(): React.ReactElement {
	const [image, setImage] = useState<string>("no image")
	const { form } = useCreateCategoryForm()
	const { toast } = useToast()
	const router = useRouter()

	const onSubmit = async (values: z.infer<typeof createCategorySchema>): Promise<void> => {
		try {
			await createCategory({
				...values,
				image,
			})

			toast({
				title: "Category created",
				description: "The category was created successfully",
				duration: 3000,
			})
			router.push("/admin/categories")
		} catch (error) {
			toast({
				title: "Error creating category",
				description: "There was an error creating the category, please try again later",
				variant: "destructive",
				duration: 3000,
			})
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="grid grid-cols-1 gap-4 sm:grid-cols-2"
			>
				<GenericField control={form.control} name="name" label="Name" placeholder="Name" />
				<GenericField control={form.control} name="slug" label="Slug" placeholder="slug-slug" />
				<GenericTextAreaField
					control={form.control}
					name="description"
					label="Description"
					placeholder="Description"
				/>
				<PetTypeSelectField control={form.control} />
				<ImageField image={image} setImage={setImage} />

				<Button type="submit" className="w-full bg-blue-400 hover:bg-blue-300 sm:col-span-2">
					Create Category
				</Button>
			</form>
		</Form>
	)
}

export default CreateCategoryForm
