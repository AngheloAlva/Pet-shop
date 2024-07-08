"use client"

import { PaginationButtons, ProductCard } from "@/components/ui"
import { useProducts } from "@/hooks"
import Image from "next/image"

function BrandBySlugPage({ params }: { params: { brandSlug: string } }): React.ReactElement {
	const limit = 10
	const { products, isLoading, page, setPage, total } = useProducts({
		initialFilters: {
			brandSlug: params.brandSlug,
			isAvailable: true,
			page: 1,
			limit,
		},
	})

	return (
		<main className="flex flex-col gap-5 px-5 pb-20 pt-28 text-text-100 sm:px-10 md:px-20">
			{products && products.length >= 1 && (
				<>
					<section className="max-w-xl">
						<Image
							width={200}
							height={200}
							src={products[0].brand?.image}
							alt={products[0].brand?.name}
							className="h-auto w-32"
						/>
						<h1 className="text-xl font-bold">{products[0].brand?.name}</h1>
						<p className="text-muted-foreground">We have a wide range of products for this brand</p>
					</section>

					<section className="xs:grid-cols-2 grid grid-cols-1 gap-x-2 gap-y-4 md:grid-cols-3 lg:grid-cols-4">
						{products.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</section>

					<div className="flex w-full items-center justify-center gap-2">
						<PaginationButtons setPage={setPage} limit={limit} total={total} page={page} />
					</div>
				</>
			)}
		</main>
	)
}

export default BrandBySlugPage
