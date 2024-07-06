"use client"

import { useDebouncedCallback } from "use-debounce"
import useProducts from "@/hooks/useProduct"

import ProductSearchItem from "./ProductSeachItem"
import { Input } from "@/components/ui"

function SearchSection(): React.ReactElement {
	const { products, setFilters, isLoading } = useProducts({
		initialFilters: {
			isAvailable: true,
			limit: 5,
			page: 1,
		},
	})

	const searchProducts = useDebouncedCallback((search: string) => {
		setFilters({
			search,
			isAvailable: true,
			limit: 5,
			page: 1,
		})
	}, 300)

	return (
		<div>
			<Input
				placeholder="Search..."
				className="mb-4"
				onChange={(e) => searchProducts(e.target.value)}
			/>

			<div className="flex max-h-96 flex-col gap-3 overflow-y-scroll">
				{isLoading ? (
					<div>Loading...</div>
				) : (
					products?.map((product) => <ProductSearchItem product={product} key={product.id} />)
				)}
			</div>
		</div>
	)
}

export default SearchSection
