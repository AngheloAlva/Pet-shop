"use client"

import { PaginationButtons, ProductCard } from "@/components/ui"
import { useProducts } from "@/hooks"

import type { PetType } from "@prisma/client"

function PetTypePage({ params }: { params: { petType: string } }): React.ReactElement {
	const limit = 10
	const { products, isLoading, page, setPage, total } = useProducts({
		initialFilters: {
			petType: params.petType.toUpperCase() as PetType,
			isAvailable: true,
			limit,
			page: 1,
		},
	})

	return (
		<main className="mx-auto flex max-w-[1900px] flex-col gap-5 px-5 pb-20 pt-28 text-text-100 sm:px-10 md:px-20 md:pt-40">
			{products && products.length >= 1 && (
				<>
					<section className="max-w-xl">
						<h1 className="text-xl font-bold">Products for {products[0].petType}</h1>
						<p className="text-muted-foreground">
							We have a wide range of products for your {products[0].petType}
						</p>
					</section>

					<section className="grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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

export default PetTypePage
