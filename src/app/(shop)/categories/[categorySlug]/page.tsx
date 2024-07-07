"use client"

import { PaginationButtons, ProductCard } from "@/components/ui"
import useProducts from "@/hooks/useProduct"
import Image from "next/image"

function CategoryBySlugPage({ params }: { params: { categorySlug: string } }): React.ReactElement {
	const limit = 10
	const { products, isLoading, page, setPage, total } = useProducts({
		initialFilters: { categorySlug: params.categorySlug, isAvailable: true, limit, page: 1 },
	})

	return (
		<main className="flex flex-col gap-5 px-5 pb-20 pt-28 text-text-100 sm:px-10 md:px-20 md:pt-40 lg:px-40">
			{products && products.length >= 1 && (
				<>
					<section className="flex max-w-2xl gap-4">
						<Image
							className="h-32 w-32 rounded-lg shadow-md"
							src={products[0].category?.image ?? "/placeholder.png"}
							alt={products[0].category?.name ?? "category image"}
							width={500}
							height={500}
						/>
						<div>
							<h1 className="text-xl font-bold">{products[0].category?.name}</h1>
							<p className="text-muted-foreground">{products[0]?.category?.description}</p>
						</div>
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

export default CategoryBySlugPage
