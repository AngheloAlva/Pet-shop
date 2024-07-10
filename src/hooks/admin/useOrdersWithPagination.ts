import { getOrders } from "@/actions"
import { useToast } from "@/components/ui"
import { Order } from "@prisma/client"
import { useEffect, useState } from "react"

interface UseOrdersWithPaginationResponse {
	page: number
	total: number
	orders: Order[]
	isLoading: boolean
	setPage: (page: number) => void
}

export const useOrdersWithPagination = ({
	limit,
}: {
	limit: number
}): UseOrdersWithPaginationResponse => {
	const [orders, setOrders] = useState<Order[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [total, setTotal] = useState<number>(0)
	const [page, setPage] = useState<number>(1)
	const { toast } = useToast()

	useEffect(() => {
		const fetchBrands = async (): Promise<void> => {
			try {
				const { ok, total, orders } = await getOrders(page, limit)

				if (!ok || !orders) throw new Error("Error getting orders")

				setOrders(orders)
				setTotal(total)
				setIsLoading(false)
			} catch (error) {
				toast({
					title: "Error getting orders",
					description: (error as any).response?.data,
				})
			}
		}

		void fetchBrands()
	}, [limit, page])

	return {
		page,
		total,
		orders,
		setPage,
		isLoading,
	}
}
