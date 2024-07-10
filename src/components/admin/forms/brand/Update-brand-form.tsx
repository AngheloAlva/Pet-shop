"use client"

import { useCreateBrandForm } from "@/hooks"
import { useRouter } from "next/navigation"
import { createBrandSchema } from "@/lib"
import { updateBrand } from "@/actions"

import { Button, Form, useToast } from "@/components/ui"
import GenericField from "../GenericField"

import type { z } from "zod"

function UpdateBrandForm({ defaultValues, brandId }: UpdateBrandFormProps): React.ReactElement {
	const { form } = useCreateBrandForm(defaultValues)
	const { toast } = useToast()
	const router = useRouter()

	const onSubmit = async (values: z.infer<typeof createBrandSchema>): Promise<void> => {
		try {
			await updateBrand(brandId, {
				...values,
			})

			toast({
				title: "Brand created",
				description: "The brand was created successfully",
				duration: 3000,
			})
			router.push("/admin/brands")
		} catch (error) {
			toast({
				title: "Error creating brand",
				description: "There was an error creating the brand, please try again later",
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

				<Button type="submit" className="w-full bg-blue-400 hover:bg-blue-300 sm:col-span-2">
					Update Brand
				</Button>
			</form>
		</Form>
	)
}

export default UpdateBrandForm

interface UpdateBrandFormProps {
	defaultValues: z.infer<typeof createBrandSchema>
	brandId: number
}
