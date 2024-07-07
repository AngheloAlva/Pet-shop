"use client"

import { useEffect, useState } from "react"
import { notFound } from "next/navigation"
import { getBrands } from "@/actions"

import type { GetAllOfModel } from "@/interfaces"
import type { Brand } from "@prisma/client"

export const useBrands = ({
	isAvailable,
	limit,
	page,
}: GetAllOfModel): { brands: Brand[]; isLoading: boolean } => {
	const [brands, setBrands] = useState<Brand[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)

	useEffect(() => {
		const fetchBrands = async (): Promise<void> => {
			try {
				const { brands } = await getBrands({ isAvailable, limit, page })
				setBrands(brands || [])
				setIsLoading(false)
			} catch (error) {
				notFound()
			}
		}

		void fetchBrands()
	}, [isAvailable, limit, page])

	return {
		brands,
		isLoading,
	}
}
