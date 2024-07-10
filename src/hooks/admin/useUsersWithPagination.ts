"use client"

import { getUsers } from "@/actions"
import { useToast } from "@/components/ui"
import { User } from "@prisma/client"
import { useEffect, useState } from "react"

interface UseUsersWithPaginationResponse {
	page: number
	total: number
	users: User[]
	isLoading: boolean
	setPage: (page: number) => void
}

export const useUsersWithPagination = ({
	limit,
	isAvailable,
}: {
	limit: number
	isAvailable: boolean
}): UseUsersWithPaginationResponse => {
	const [users, setusers] = useState<User[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [total, setTotal] = useState<number>(0)
	const [page, setPage] = useState<number>(1)
	const { toast } = useToast()

	useEffect(() => {
		const fetchBrands = async (): Promise<void> => {
			try {
				const { users, ok, total } = await getUsers({ page, limit, isAvailable })

				if (!ok || !users) throw new Error("Error getting users")

				setusers(users)
				setTotal(total)
				setIsLoading(false)
			} catch (error) {
				toast({
					title: "Error getting users",
					description: (error as any).response?.data,
				})
			}
		}

		void fetchBrands()
	}, [limit, page])

	return {
		page,
		total,
		users,
		setPage,
		isLoading,
	}
}
