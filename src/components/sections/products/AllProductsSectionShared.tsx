"use client"

import { notFound } from "next/navigation"
import { useProducts } from "@/hooks"
import Image from "next/image"

import { PaginationButtons, ProductCard, Skeleton } from "@/components/ui"
import AllProductsSkeleton from "./AllProductsSkeleton"

import type { GetProductsWithFilters } from "@/interfaces"

interface AllProductsSectionProps {
	filterName: keyof GetProductsWithFilters
	imageFrom?: "brand" | "category"
	filterValue: string
}

export default function AllProductsSectionShared({
	imageFrom,
	filterName,
	filterValue,
}: AllProductsSectionProps): React.ReactElement {
	const { products, isLoading, page, setPage, total } = useProducts({
		initialFilters: {
			[filterName]: filterValue,
			isAvailable: true,
			limit: 12,
			page: 1,
		},
	})

	if (products === undefined) {
		notFound()
	}

	return (
		<>
			<section className="max-w-xl">
				{isLoading ? (
					<>
						<Skeleton className="h-32 w-32" />
						<Skeleton className="mt-2 h-6 w-36" />
						<Skeleton className="mt-1 h-4 w-full" />
					</>
				) : (
					<>
						{imageFrom !== undefined && (
							<Image
								width={200}
								height={200}
								src={
									imageFrom === "category" ? products[0].category.image : products[0].brand.image
								}
								alt={imageFrom === "category" ? products[0].category.name : products[0].brand.name}
								className="h-auto w-32"
							/>
						)}
						<h1 className="text-xl font-bold">
							{imageFrom === undefined
								? `Products for ${filterValue.toUpperCase()}`
								: imageFrom === "category"
									? products[0].category.name
									: products[0].brand.name}
						</h1>
						<p className="text-muted-foreground">
							We have a wide range of products for you to choose from.
						</p>
					</>
				)}
			</section>

			{products.length === 0 && !isLoading && (
				<div className="flex h-96 items-center justify-center">
					<p className="text-lg text-muted-foreground">No products found</p>
				</div>
			)}

			{isLoading ? (
				<AllProductsSkeleton />
			) : (
				<>
					<div className="flex gap-4">
						<section className="grid w-full grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
							{products.map((product) => (
								<ProductCard key={product.id} product={product} />
							))}
						</section>
					</div>

					<div className="mt-5 flex w-full items-center justify-center gap-2">
						<PaginationButtons setPage={setPage} limit={12} total={total} page={page} />
					</div>
				</>
			)}
		</>
	)
}
