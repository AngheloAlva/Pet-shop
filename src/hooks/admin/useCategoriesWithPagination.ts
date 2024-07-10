import { useEffect, useState } from "react"

import type { GetAllOfModel } from "@/interfaces"
import type { Category } from "@prisma/client"
import { useToast } from "@/components/ui"
import { getCategories } from "@/actions"

interface UseCategoriesWithPaginationResponse {
	page: number
	total: number
	setPage: (page: number) => void
	isLoading: boolean
	categories: Category[]
	refresh: () => Promise<void>
}

export const useCategoriesWithPagination = ({
	isAvailable,
	limit,
}: GetAllOfModel): UseCategoriesWithPaginationResponse => {
	const [categories, setCategories] = useState<Category[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [total, setTotal] = useState<number>(0)
	const [page, setPage] = useState<number>(1)
	const { toast } = useToast()

	const fetchCategories = async (): Promise<void> => {
		try {
			const { ok, categories, total } = await getCategories({ isAvailable, limit, page })

			if (!ok || !categories) throw new Error("Error getting categories")

			setCategories(categories)
			setTotal(total)
			setIsLoading(false)
		} catch (error) {
			toast({
				title: "Error getting categories",
				description: (error as any).response?.data,
			})
		}
	}

	useEffect(() => {
		void fetchCategories()
	}, [limit, page])

	return {
		page,
		total,
		setPage,
		isLoading,
		categories,
		refresh: fetchCategories,
	}
}
