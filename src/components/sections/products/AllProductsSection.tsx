"use client"

import { useEffect, useState } from "react"
import { notFound } from "next/navigation"
import { useFilterStore } from "@/store"
import { getProducts } from "@/actions"

import { PaginationButtons, ProductCard } from "@/components/ui"
import FilterSection from "./filter/FilterSection"

import type { GetProductResponse } from "@/interfaces"
import AllProductsSkeleton from "./AllProductsSkeleton"

export default function AllProductsSection(): React.ReactElement {
	const filters = useFilterStore((state) => state.filters)
	const [products, setProducts] = useState<GetProductResponse[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [total, setTotal] = useState(0)
	const [page, setPage] = useState(1)

	useEffect(() => {
		const fetchProducts = async (): Promise<void> => {
			const { ok, products, total } = await getProducts({
				...filters,
				isAvailable: true,
				limit: 12,
				page,
			})

			if (!ok || !products) {
				notFound()
			}

			setProducts(products)
			setTotal(total)
			setIsLoading(false)
		}

		void fetchProducts()
	}, [filters, page])

	return (
		<>
			{isLoading ? (
				<AllProductsSkeleton />
			) : (
				<>
					<div className="flex gap-4">
						<FilterSection />
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
