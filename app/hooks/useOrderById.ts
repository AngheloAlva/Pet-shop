import { useEffect, useState } from 'react'

import type { Order } from '@/types/user/order.types'
import { getOrder } from '../lib/api/user/order'

const useOrderById = (orderId: number): { order: Order | null, isLoading: boolean } => {
  const [order, setOrder] = useState<Order | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchOrder = async (): Promise<void> => {
      try {
        const order = await getOrder(orderId)
        setOrder(order)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    void fetchOrder()
  }, [])

  return {
    order,
    isLoading
  }
}

export default useOrderById
