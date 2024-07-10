import { getProductById } from "@/actions"
import UpdateProductForm from "@/components/admin/forms/product/Update-product-form"
import { createProductSchema } from "@/lib"
import type { z } from "zod"

async function UpdateProductPage({
	params,
}: {
	params: { productId: string }
}): Promise<React.ReactElement> {
	const { ok, data: product } = await getProductById(parseInt(params.productId))

	if (!ok || product == null) {
		return <div>Product not found</div>
	}

	const defaultValues: z.infer<typeof createProductSchema> = {
		sku: product.sku,
		name: product.name,
		miniDesc: product.miniDesc,
		slug: product.slug,
		description: JSON.parse(product.description),
		petType: product.petType[0],
		lifeStage: product.lifeStage,
		categoryId: product?.category?.id.toString() ?? "",
		brandId: product?.brand?.id.toString() ?? "",
		options: product.options.map((option) => ({
			name: option.name,
			price: option.price,
			stock: option.stock,
			discount: option.discount,
		})),
	}

	return (
		<main className="md flex flex-col gap-7 px-5 pb-20 pt-4 text-text-100">
			<div>
				<h1 className="text-3xl font-bold">Update Product</h1>
				<p className="text-muted-foreground">Only change the fields you want to update.</p>
			</div>
			<UpdateProductForm defaultValues={defaultValues} productId={product.id} />
		</main>
	)
}

export default UpdateProductPage
