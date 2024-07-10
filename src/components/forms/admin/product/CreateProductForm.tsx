"use client"

import { useCreateProductForm } from "@/hooks"
import { createProductSchema } from "@/lib"
import { useRouter } from "next/navigation"
import { createProduct } from "@/actions"
import { useState } from "react"

import { Button, Form, Separator, useToast } from "@/components/ui"
import GenericTextAreaField from "../GenericTextAreaField"
import LifeStageSelectField from "./LifeStageSelectField"
import CategorySelectField from "./CategorySelectField"
import PetTypeSelectField from "./PetTypeSelectField"
import DescriptionFields from "./DescriptionFields"
import BrandSelectField from "./BrandSelectField"
import OptionsFields from "./OptionsFields"
import GenericField from "../GenericField"
import ImageField from "./ImageField"

import type { PetType } from "@prisma/client"
import type { z } from "zod"

export default function CreateProductForm(): React.ReactElement {
	const [images, setImages] = useState<string[]>([])
	const { form } = useCreateProductForm()
	const { toast } = useToast()
	const router = useRouter()

	const onSubmit = async (values: z.infer<typeof createProductSchema>): Promise<void> => {
		try {
			await createProduct({
				...values,
				images,
				description: JSON.stringify(values.description),
				categoryId: Number(values.categoryId),
				brandId: Number(values.brandId),
				petType: [values.petType] as PetType[],
				options: values.options.map((option) => ({
					...option,
					price: Number(option.price),
					stock: Number(option.stock),
					discount: Number(option.discount),
				})),
			})

			toast({
				title: "Product created",
				description: "The product has been created successfully",
				duration: 3000,
			})

			router.push("/admin/products")
		} catch (error) {
			toast({
				title: "Error creating product",
				description: "There was an error creating the product, please try again later",
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
				<ImageField setImages={setImages} images={images} />
				<div className="space-y-4 sm:col-span-2">
					<Separator />
					<OptionsFields form={form} />
					<Separator />
				</div>
				<div className="space-y-4 sm:col-span-2">
					<DescriptionFields form={form} />
					<Separator />
				</div>

				<Button type="submit" className="mt-4 bg-blue-400 hover:bg-blue-300 sm:col-span-2">
					Create Product
				</Button>
			</form>
		</Form>
	)
}
