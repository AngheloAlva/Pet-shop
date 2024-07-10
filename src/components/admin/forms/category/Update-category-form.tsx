"use client"

import { useRouter } from "next/navigation"

import PetTypeSelectField from "../product/Pet-type-select-field"
import GenericTextAreaField from "../GenericTextAreaField"

import type { z } from "zod"
import { useCreateCategoryForm } from "@/hooks"
import { Button, Form, useToast } from "@/components/ui"
import { createCategorySchema } from "@/lib"
import { updateCategory } from "@/actions"
import GenericField from "../GenericField"

function UpdateCategoryForm({
	defaultValues,
	categoryId,
}: UpdateCategoryFormProps): React.ReactElement {
	const { form } = useCreateCategoryForm(defaultValues)
	const { toast } = useToast()
	const router = useRouter()

	const onSubmit = async (values: z.infer<typeof createCategorySchema>): Promise<void> => {
		try {
			await updateCategory(categoryId, {
				...values,
			})

			toast({
				title: "Category updated",
				description: "The category was updated successfully",
				duration: 3000,
			})
			router.push("/admin/categories")
		} catch (error) {
			toast({
				title: "Error updating category",
				description: "There was an error updating the category, please try again later",
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

				<Button type="submit" className="w-full bg-blue-400 hover:bg-blue-300 sm:col-span-2">
					Update Category
				</Button>
			</form>
		</Form>
	)
}

export default UpdateCategoryForm

interface UpdateCategoryFormProps {
	categoryId: number
	defaultValues: z.infer<typeof createCategorySchema>
}
