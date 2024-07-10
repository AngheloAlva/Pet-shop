"use client"

import { useCategoriesWithPagination } from "@/hooks"
import ProductsSectionSkeleton from "../skeletons/Products-section-skeleton"
import AdminCategoryItem from "./CategoryItem"
import { PaginationButtons } from "@/components/ui"

function AdminCategoriesSection(): React.ReactElement {
	const limit = 10
	const { categories, isLoading, total, page, setPage, refresh } = useCategoriesWithPagination({
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
						<h2 className="text-lg font-bold">Categories</h2>
						<p>{total} categories</p>
					</div>
					<div className="flex gap-4">
						<section className="grid grid-cols-1 gap-x-2 gap-y-4 md:grid-cols-2 xl:grid-cols-3">
							{categories.length > 0 &&
								categories.map((category) => (
									<AdminCategoryItem key={category.id} category={category} refresh={refresh} />
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

export default AdminCategoriesSection
