import { getOrdersByUser } from '@/app/lib/api/user/order'
import { auth } from '@clerk/nextjs'
import Link from 'next/link'

import OrderCard from '@/app/components/profile/order-card'
import { Button } from '@/app/components/ui/button'

async function OrdersPage (): Promise<React.ReactElement> {
  const { userId } = auth()

  if (userId == null) {
    return (
      <main className='flex flex-col gap-5 pb-20 px-5 sm:px-10 md:px-20 lg:px-40 text-text-100 pt-24 md:pt-40'>
        <h1 className='text-3xl font-bold'>Orders</h1>
        <p>You must be logged in to see your orders.</p>
      </main>
    )
  }

  const orders = await getOrdersByUser(userId)

  return (
    <main className='flex flex-col gap-5 pb-20 px-5 sm:px-10 md:px-20 lg:px-40 text-text-100 pt-24 md:pt-40'>
      <h1 className='text-3xl font-bold'>Orders</h1>

      {
        orders.length === 0
          ? (<>
              <p>You haven't placed any orders yet.</p>
              <Button size={'lg'}>
                <Link href='/' className='w-full'>
                  Go to home
                </Link>
              </Button>
            </>)
          : (
            <section className='flex flex-col gap-5'>
              {
                orders.map((order) => (
                  <OrderCard order={order} key={order.id} />
                ))
              }
            </section>
            )
      }
    </main>
  )
}

export default OrdersPage
