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

// {
//   id: 22,
//   userId: 2,
//   orderDate: '2024-02-09T13:09:16.986Z',
//   shippingMethod: 'SHOP_PICKUP',
//   addressId: 2,
//   paid: false,
//   checkoutSessionId: null,
//   items: [
//     {
//       id: 36,
//       orderId: 22,
//       productId: 24,
//       productName: 'Acana Dog Classic Wild Coast 9.7 kg',
//       productImage: 'https://cdn11.bigcommerce.com/s-d331r3r4ex/images/stencil/608x608/products/21530/45785/601221__16426.1698239821.jpg?c=1',
//       productDescription: 'Acana Puppy & Junior is a food made with free-range chicken, turkey, wild fish and whole eggs from the nest in WholePrey™ proportions to fully nourish your puppy. Prepared in DogStar® kitchens in Kentucky with fresh, regional ingredients. Unique and Biologically Appropriate™, a delicious and natural way to keep your dog healthy, happy and strong.',
//       productPrice: 56990,
//       optionSelectedIndex: 0,
//       quantity: 1
//     }
//   ],
//   payment: {
//     id: 19,
//     orderId: 22,
//     amount: 56990,
//     currency: 'clp',
//     stripeSessionId: 'cs_test_a15w8OaozhsJ2bmE3lqwnH4SDoWdJ1XydkAbXp7c4bBHBiyvsdz2tUoC96',
//     status: 'PENDING',
//     createdAt: '2024-02-09T13:09:16.986Z'
//   }
// }

export default OrderInfo
