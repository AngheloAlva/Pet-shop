"use client"

import { AllProductsSection } from "@/components/sections"
import useProducts from "@/hooks/useProduct"
import { notFound } from "next/navigation"

function ProductPage(): React.ReactElement {
	const limit = 12
	const { products, isLoading, total, page, setPage, setFilters, filters } = useProducts({
		initialFilters: {
			isAvailable: true,
			page: 1,
			limit,
		},
	})

	if (!products) {
		notFound()
	}

	return (
		<main className="text-text-100 flex flex-col gap-5 px-5 pb-20 pt-28 sm:px-10 md:px-20">
			<AllProductsSection
				page={page}
				total={total}
				limit={limit}
				filters={filters}
				setPage={setPage}
				products={products}
				setFilters={setFilters}
			/>
		</main>
	)
}

export default ProductPage
