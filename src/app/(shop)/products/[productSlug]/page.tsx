import { Suspense } from "react"
import { prisma } from "@/lib"

import ProductDataSkeleton from "@/components/sections/products/ProductDataSkeleton"
import { ProductData } from "@/components/sections"

import type { Metadata } from "next"

interface Props {
	params: { productSlug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const product = await prisma.product.findUnique({
		where: { slug: params.productSlug },
		include: {
			brand: { select: { name: true } },
			category: { select: { name: true } },
		},
	})

	if (!product) {
		return {
			title: "Product not found | Pet Shop",
			description: "The product you are looking for is not available at PetStore.",
		}
	}

	const { name, brand, category, lifeStage, images } = product

	return {
		title: `${name} | Pet Shop`,
		description: `Buy ${name} from ${brand?.name} of ${category?.name} for your ${lifeStage} at PetStore.`,
		openGraph: {
			images: [images[0]],
		},
	}
}

export async function generateStaticParams() {
	const products = await prisma.product.findMany({ select: { slug: true } })

	return products.map((products) => ({ productSlug: products.slug }))
}

export default function ProductPage({ params }: Props): React.ReactElement {
	return (
		<main className="mx-auto w-screen max-w-[1900px] space-y-14 px-5 pb-20 pt-28 sm:px-10 md:px-20 md:pt-40 lg:px-40">
			<Suspense fallback={<ProductDataSkeleton />}>
				<ProductData productSlug={params.productSlug} />
			</Suspense>
		</main>
	)
}
