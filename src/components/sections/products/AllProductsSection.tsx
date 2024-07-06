import { PaginationButtons, ProductCard } from "@/components/ui"
import { FilterButton } from "./filter/FilterButton"
import FilterSection from "./filter/FilterSection"

import type { GetProductResponse, GetProductsWithFilters } from "@/interfaces"

interface ProductsSectionProps {
	products: GetProductResponse[]
	total: number
	filters: GetProductsWithFilters
	setFilters: (filters: GetProductsWithFilters) => void
	setPage: (page: number) => void
	page: number
	limit: number
}

function AllProductsSection({
	filters,
	limit,
	page,
	products,
	setFilters,
	setPage,
	total,
}: ProductsSectionProps): React.ReactElement {
	return (
		<>
			<section className="flex flex-col">
				<div className="max-w-xl">
					<h1 className="text-nowrap text-xl font-bold">All Products</h1>
					<p className="text-muted-foreground">{total} products</p>
				</div>
				<div className="flex w-full items-center justify-end lg:hidden">
					<FilterButton setFilters={setFilters} filters={filters} />
				</div>
			</section>

			<div className="flex gap-4">
				<FilterSection setFilters={setFilters} filters={filters} />
				<section className="xs:grid-cols-2 grid grid-cols-1 gap-x-2 gap-y-4 md:grid-cols-3 xl:grid-cols-4">
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</section>
			</div>

			<div className="mt-5 flex w-full items-center justify-center gap-2">
				<PaginationButtons setPage={setPage} limit={limit} total={total} page={page} />
			</div>
		</>
	)
}

export default AllProductsSection
