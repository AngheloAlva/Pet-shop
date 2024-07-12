"use client"

import { useDebouncedCallback } from "use-debounce"
import { useEffect, useState } from "react"
import { useFilterStore } from "@/store"
import { getProducts } from "@/actions"

import { Input, Skeleton, useToast } from "@/components/ui"
import ProductSearchItem from "./ProductSeachItem"

import type { GetProductResponse } from "@/interfaces"

export default function SearchSection(): React.ReactElement {
	const { setFilters, filters } = useFilterStore()
	const { toast } = useToast()

	const [products, setProducts] = useState<GetProductResponse[] | undefined>([])
	const [message, setMessage] = useState("Type to search")
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchProducts = async () => {
			setIsLoading(true)

			const { ok, products } = await getProducts({
				...filters,
			})

			console.log(products)

			if (!ok) {
				toast({
					title: "Error",
					description: "Failed to fetch products. Try again later.",
					variant: "destructive",
				})
			}

			if (products?.length === 0) {
				setMessage("No products found.")
				setIsLoading(false)
				setProducts([])
				return
			}

			setMessage("")
			setIsLoading(false)
			setProducts(products)
		}

		void fetchProducts()
	}, [filters])

	const searchProducts = useDebouncedCallback(async (search: string) => {
		setFilters({
			...filters,
			search,
		})
	}, 500)

	return (
		<div>
			<Input
				placeholder="Search..."
				className="mb-4"
				onChange={(e) => searchProducts(e.target.value)}
			/>

			<p className="mb-4 text-center text-muted-foreground">{message}</p>

			<div className="flex max-h-96 flex-col gap-3 overflow-y-scroll">
				{isLoading
					? Array.from({ length: 2 }).map((_, index) => (
							<Skeleton key={index} className="h-28 w-full" />
						))
					: products?.map((product) => <ProductSearchItem product={product} key={product.id} />)}
			</div>
		</div>
	)
}
