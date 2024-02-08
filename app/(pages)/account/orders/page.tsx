'use client'

import useUserOrders from '@/app/hooks/useUserOrders'
import { useUser } from '@clerk/nextjs'

function OrdersPage (): React.ReactElement {
  const { user } = useUser()
  const { orders } = useUserOrders(user?.id)

  console.log(orders)

  return (
    <div>Component</div>
  )
}

export default OrdersPage
