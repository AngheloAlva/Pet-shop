import { getCategoryById } from "@/actions"
import UpdateCategoryForm from "@/components/admin/forms/category/Update-category-form"
import { createCategorySchema } from "@/lib"
import type { z } from "zod"

async function UpdateCategoryPage({
	params,
}: {
	params: { categoryId: string }
}): Promise<React.ReactElement> {
	const { data, ok } = await getCategoryById(parseInt(params.categoryId))

	if (!ok || data == null) {
		return <div>Category not found</div>
	}

	const defaultValues: z.infer<typeof createCategorySchema> = {
		name: data.name,
		image: data.image,
		description: data.description,
		petType: data.petType,
		slug: data.slug,
	}

	return (
		<main className="md flex flex-col gap-7 px-5 pb-20 pt-4 text-text-100">
			<div>
				<h1 className="text-3xl font-bold">Update Category</h1>
				<p className="text-muted-foreground">Only change the fields you want to update.</p>
			</div>

			<UpdateCategoryForm defaultValues={defaultValues} categoryId={parseInt(params.categoryId)} />
		</main>
	)
}

export default UpdateCategoryPage
