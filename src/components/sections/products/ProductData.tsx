import { getProductBySlug } from "@/actions"
import { notFound } from "next/navigation"

import PrimaryInfoSection from "./PrimaryInfoSection"
import DescriptionSection from "./DescriptionSection"
import ImageSection from "./ImageSection"

export default async function ProductData({
	productSlug,
}: {
	productSlug: string
}): Promise<React.ReactElement> {
	const { ok, data: product } = await getProductBySlug(productSlug)

	if (!ok || !product) notFound()

	return (
		<>
			<div className="flex flex-col gap-10 md:flex-row">
				<ImageSection images={product.images} name={product.name} />
				<PrimaryInfoSection product={product} />
			</div>

			<DescriptionSection description={product.description} />
		</>
	)
}
