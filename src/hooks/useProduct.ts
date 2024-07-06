import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getProducts } from "@/actions"

import type { GetProductResponse, GetProductsWithFilters } from "@/interfaces"
import type { Product } from "@prisma/client"

interface UseProducts {
	initialFilters: GetProductsWithFilters
}

const useProducts = ({
	initialFilters,
}: UseProducts): {
	page: number
	total: number
	isLoading: boolean
	products: GetProductResponse[] | undefined
	filters: GetProductsWithFilters
	setPage: (page: number) => void
	setFilters: (filters: GetProductsWithFilters) => void
} => {
	const [filters, setFilters] = useState<GetProductsWithFilters>(initialFilters)
	const [products, setProducts] = useState<GetProductResponse[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [total, setTotal] = useState(0)
	const [page, setPage] = useState(1)

	const router = useRouter()

	useEffect(() => {
		const fetchProducts = async (): Promise<void> => {
			try {
				const { ok, total, products } = await getProducts({
					...filters,
					page,
				})

				if (ok) {
					setProducts(products || [])
					setTotal(total)
				}

				setIsLoading(false)
			} catch (error) {
				router.push("/404")
			}
		}

		void fetchProducts()
	}, [page, filters, router])

	return {
		page,
		total,
		filters,
		setPage,
		products,
		isLoading,
		setFilters,
	}
}

export default useProducts
