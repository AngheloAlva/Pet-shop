"use client"

import { useEffect, useState } from "react"

import type { Brand } from "@prisma/client"
import { GetAllOfModel } from "@/interfaces"
import { useToast } from "@/components/ui"
import { getBrands } from "@/actions"

interface UseBrandsWithPaginationResponse {
	page: number
	total: number
	brands: Brand[]
	isLoading: boolean
	refresh: () => Promise<void>
	setPage: (page: number) => void
}

export const useBrandsWithPagination = ({
	isAvailable,
	limit,
}: GetAllOfModel): UseBrandsWithPaginationResponse => {
	const [brands, setBrands] = useState<Brand[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [total, setTotal] = useState<number>(0)
	const [page, setPage] = useState<number>(1)
	const { toast } = useToast()

	const fetchBrands = async (): Promise<void> => {
		try {
			const { ok, brands, total } = await getBrands({ isAvailable, limit, page })

			if (!ok || !brands) throw new Error("Error getting brands")

			setBrands(brands)
			setTotal(total)
			setIsLoading(false)
		} catch (error) {
			toast({
				title: "Error getting brands",
				description: (error as any).response?.data,
			})
		}
	}

	useEffect(() => {
		void fetchBrands()
	}, [limit, page])

	return {
		page,
		total,
		brands,
		setPage,
		isLoading,
		refresh: fetchBrands,
	}
}
