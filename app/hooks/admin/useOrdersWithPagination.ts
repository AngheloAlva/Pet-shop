import { useToast } from '../../components/ui/use-toast'
import { getOrders } from '../../lib/api/user/order'
import { useEffect, useState } from 'react'

import type { Order } from '@/types/user/order.types'

interface UseOrdersWithPaginationResponse {
  page: number
  total: number
  orders: Order[]
  isLoading: boolean
  setPage: (page: number) => void
}

const useOrdersWithPagination = (
  { limit, authId }: { limit: number, authId: string }
): UseOrdersWithPaginationResponse => {
  const [orders, setOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [total, setTotal] = useState<number>(0)
  const [page, setPage] = useState<number>(1)
  const { toast } = useToast()

  useEffect(() => {
    const fetchBrands = async (): Promise<void> => {
      try {
        const orders = await getOrders(authId, page, limit)
        setOrders(orders.orders)
        setTotal(orders.total)
        setIsLoading(false)
      } catch (error) {
        toast({
          title: 'Error getting orders',
          description: (error as any).response?.data
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
    isLoading
  }
}

export default useOrdersWithPagination
