"use client"

import { ProductsSectionSkeleton } from "@/components/sections"
import { PaginationButtons } from "@/components/ui"
import AdminBrandItem from "./BrandItem"
import { useBrandsWithPagination } from "@/hooks"

function AdminBrandsSection(): React.ReactElement {
	const limit = 10
	const { brands, isLoading, total, page, setPage, refresh } = useBrandsWithPagination({
		isAvailable: true,
		limit,
		page: 1,
	})

	return (
		<>
			{isLoading ? (
				<ProductsSectionSkeleton />
			) : (
				<section className="flex flex-col gap-2">
					<div className="flex w-full items-center justify-between">
						<h2 className="text-lg font-bold">Brands</h2>
						<p>{total} brands</p>
					</div>
					<div className="flex gap-4">
						<section className="grid grid-cols-1 gap-x-2 gap-y-4 md:grid-cols-2 xl:grid-cols-3">
							{brands.length > 0 &&
								brands.map((brand) => (
									<AdminBrandItem key={brand.id} brand={brand} refresh={refresh} />
								))}
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

export default AdminBrandsSection
