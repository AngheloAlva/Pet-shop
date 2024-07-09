import { getProductBySlug } from "@/actions"
import type { Metadata } from "next"

import { ProductData } from "@/components/sections"

export async function generateMetadata({
	params,
}: {
	params: { productSlug: string }
}): Promise<Metadata> {
	const { data } = await getProductBySlug(params.productSlug)

	if (!data) {
		return {
			title: "Product not found",
			description: "The product you are looking for does not exist.",
		}
	}

	const { name, brand, category, lifeStage, petType } = data

	return {
		title: name,
		description: `Buy ${name} from ${brand?.name} of ${category?.name} for your ${lifeStage} ${petType[0]} at PetStore.`,
	}
}

async function ProductPage({
	params,
}: {
	params: { productSlug: string }
}): Promise<React.ReactElement> {
	return (
		<main className="mx-auto w-screen max-w-[1900px] space-y-14 px-5 pb-20 pt-28 sm:px-10 md:px-20 md:pt-40 lg:px-40">
			<ProductData productSlug={params.productSlug} />
		</main>
	)
}

export default ProductPage
