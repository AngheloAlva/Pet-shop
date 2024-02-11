import { useEffect, useState } from 'react'

import type { Order } from '@/types/user/order.types'
import { getOrdersByUser } from '../../lib/api/user/order'

const useUserOrders = (userId: string | undefined): {
  orders: Order[]
} => {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    const fetchOrders = async (): Promise<void> => {
      if (userId === undefined) return

      const orders = await getOrdersByUser(userId)
      setOrders(orders)
    }

    void fetchOrders()
  }, [userId])

  return {
    orders
  }
}

export default useUserOrders
