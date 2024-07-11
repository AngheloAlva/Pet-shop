"use client"

import { GetAllOfModel } from "@/interfaces"
import { useEffect, useState } from "react"
import { getCategories } from "@/actions"

import { useToast } from "@/components/ui"

import type { Category } from "@prisma/client"

export const useCategories = ({
	isAvailable,
	limit,
	page,
}: GetAllOfModel): { categories: Category[]; isLoading: boolean } => {
	const [categories, setCategories] = useState<Category[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const { toast } = useToast()

	useEffect(() => {
		const fetchCategories = async (): Promise<void> => {
			try {
				console.log("Fetching categories")
				const { ok, categories } = await getCategories({ isAvailable, limit, page })

				if (!ok) {
					toast({
						title: "Error getting categories",
						description: "An error occurred while fetching categories",
					})
				}

				setCategories(categories || [])
				setIsLoading(false)
			} catch (error) {
				toast({
					title: "Error getting categories",
					description: (error as any).response?.data,
				})
			}
		}

		void fetchCategories()
	}, [isAvailable, limit, page])

	return {
		categories,
		isLoading,
	}
}
