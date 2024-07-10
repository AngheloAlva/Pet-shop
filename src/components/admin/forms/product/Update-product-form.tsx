"use client"

import { useCreateProductForm } from "@/hooks"
import { useRouter } from "next/navigation"
import { createProductSchema } from "@/lib"
import { updateProduct } from "@/actions"

import { Button, Form, Separator, useToast } from "@/components/ui"
import GenericTextAreaField from "../GenericTextAreaField"
import LifeStageSelectField from "./Life-stage-select-field"
import CategorySelectField from "./Category-select-field"
import PetTypeSelectField from "./Pet-type-select-field"
import DescriptionFields from "./Description-fields"
import BrandSelectField from "./Brand-select-field"
import GenericField from "../GenericField"

import type { PetType } from "@prisma/client"
import type { z } from "zod"

interface UpdateProductFormProps {
	productId: number
	defaultValues: z.infer<typeof createProductSchema>
}

function UpdateProductForm({
	defaultValues,
	productId,
}: UpdateProductFormProps): React.ReactElement {
	const { form } = useCreateProductForm(defaultValues)
	const { toast } = useToast()
	const router = useRouter()

	const onSubmit = async (values: z.infer<typeof createProductSchema>): Promise<void> => {
		try {
			await updateProduct({
				...values,
				images: [""],
				productId,
				description: JSON.stringify(values.description),
				categoryId: Number(values.categoryId),
				brandId: Number(values.brandId),
				petType: [values.petType] as PetType[],
			})

			toast({
				title: "Product updated",
				description: "The product has been updated successfully",
				duration: 3000,
			})

			router.push("/admin/products")
		} catch (error) {
			toast({
				title: "Error updating product",
				description: "There was an error updating the product. Please try again",
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
				<CategorySelectField control={form.control} />
				<BrandSelectField control={form.control} />
				<GenericTextAreaField
					control={form.control}
					name="miniDesc"
					label="Mini Description"
					placeholder="Mini Description"
				/>
				<PetTypeSelectField control={form.control} />
				<LifeStageSelectField control={form.control} />
				<div className="space-y-4 sm:col-span-2">
					<DescriptionFields form={form} />
					<Separator />
				</div>

				<Button type="submit" className="mt-4 bg-blue-400 hover:bg-blue-300 sm:col-span-2">
					Update Product
				</Button>
			</form>
		</Form>
	)
}

export default UpdateProductForm
