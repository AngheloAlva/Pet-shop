import { getOrder } from '@/app/lib/api/user/order'
import Link from 'next/link'

import ProductOrderItem from '../profile/Product-order-item'
import { Button } from '../ui/button'

async function OrderInfo (
  { orderId }: { orderId: number }
): Promise<React.ReactElement> {
  const order = await getOrder(orderId)

  return (
    <section className='mt-4 w-full'>
      <h2 className='text-2xl font-bold'>
        Your order number is N°{order.id}
      </h2>
      <p className='text-lg'>
        You can track your order in your personal account.
      </p>

      <div className='flex flex-col gap-4 mt-5 md:flex-row'>
        <Link href='/' className='w-full md:max-w-xs'>
          <Button className='w-full bg-blue-300 hover:bg-blue-400' size={'lg'}>
            Go to home
          </Button>
        </Link>

        <Link href='/account/orders' className='w-full md:max-w-xs'>
          <Button variant={'outline'} className='w-full border-blue-300 bg-transparent text-blue-300 hover:bg-blue-300 hover:text-bg-100' size={'lg'}>
            Go to my orders
          </Button>
        </Link>
      </div>

      <div className='mt-10 flex flex-col gap-2'>
        <h3 className='text-xl font-bold mb-4'>Order details</h3>
        {order.items.map((item) => (
          <ProductOrderItem orderItem={item} key={item.id} />
        ))}
        <p>
          <span className='font-bold'>Total: </span>
          <span>{order?.payment?.amount.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</span>
        </p>
      </div>
    </section>
  )
}

export default OrderInfo
