"use client"

import { useProducts } from "@/hooks"
import ProductsSectionSkeleton from "../skeletons/ProductsSectionSkeleton"
import AdminProductItem from "./ProductItem"
import { FilterButton } from "@/components/sections"
import { PaginationButtons } from "@/components/ui"

function AdminDeletedProductsSection(): React.ReactElement {
	const limit = 10
	const { products, total, setPage, page, isLoading } = useProducts({
		initialFilters: {
			isAvailable: false,
			page: 1,
			limit,
		},
	})

	return (
		<>
			{isLoading ? (
				<ProductsSectionSkeleton />
			) : (
				<section className="flex flex-col gap-2">
					<div className="flex w-full items-center justify-between">
						<h2 className="text-lg font-bold">Deleted Products</h2>
						<p>{total} products</p>
						<FilterButton />
					</div>
					<div className="flex gap-4">
						<section className="grid grid-cols-1 gap-x-2 gap-y-4 md:grid-cols-2 xl:grid-cols-3">
							{products &&
								products.map((product) => <AdminProductItem key={product.id} product={product} />)}
						</section>
					</div>

					<div className="mt-7 flex w-full items-center justify-center gap-2">
						<PaginationButtons setPage={setPage} limit={limit} total={total} page={page} />
					</div>
				</section>
			)}
		</>
	)
}

export default AdminDeletedProductsSection
