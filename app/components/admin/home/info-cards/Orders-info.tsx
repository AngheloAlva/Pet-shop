import { getOrders } from '@/app/lib/api/user/order'
import { auth } from '@clerk/nextjs'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../ui/card'
import Link from 'next/link'
import { Button } from '@/app/components/ui/button'

async function AdminOrdersInfo (): Promise<React.ReactElement> {
  const { userId } = auth()

  if (userId == null) {
    return (
      <Card className='flex  flex-col items-center justify-between'>
        <div className='flex w-full items-center justify-between'>
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
        </div>
      </Card>
    )
  }
  const { total } = await getOrders(userId, 1, 1)

  return (
    <Card className='flex  flex-col items-center justify-between'>
      <div className='flex w-full items-center justify-between'>
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
      </div>

      <Link href='/admin/orders' className='w-full pb-6 px-6'>
        <Button variant={'outline'} className='w-full'>
          View details
        </Button>
      </Link>
    </Card>
  )
}

export default AdminOrdersInfo
