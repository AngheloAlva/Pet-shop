import { getOrders } from '@/app/lib/api/user/order'
import { auth } from '@clerk/nextjs'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../ui/card'

async function AdminOrdersInfo (): Promise<React.ReactElement> {
  const { userId } = auth()

  if (userId == null) {
    return (
      <Card className='flex items-center justify-between'>
        <CardHeader>
          <CardTitle className='text-xl'>
            Orders
          </CardTitle>
          <CardDescription>
            Total number of orders
          </CardDescription>
        </CardHeader>
        <CardContent className="text-4xl font-semibold p-6">
          0
        </CardContent>
      </Card>
    )
  }
  const { total } = await getOrders(userId, 1, 1)

  return (
    <Card className='flex items-center justify-between'>
      <CardHeader>
        <CardTitle className='text-xl'>
          Orders
        </CardTitle>
        <CardDescription>
          Total number of orders
        </CardDescription>
      </CardHeader>
      <CardContent className="text-4xl font-semibold p-6">
        {total}
      </CardContent>
    </Card>
  )
}

export default AdminOrdersInfo
