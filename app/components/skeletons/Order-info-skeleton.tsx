import ProductOrderItemSkeleton from './Product-order-item-skeleton'
import { Skeleton } from '../ui/skeleton'
import { Button } from '../ui/button'

function OrderInfoSkeleton (): React.ReactElement {
  return (
    <section className='mt-4'>
      <h2 className='text-2xl font-bold'>
        <Skeleton className='w-40 h-8' />
      </h2>
      <p className='text-lg'>
        You can track your order in your personal account.
      </p>

      <div className='flex flex-col gap-4 mt-5 md:flex-row'>
        <Button className='w-full bg-blue-300 hover:bg-blue-400' size={'lg'}>
          Go to home
        </Button>

        <Button variant={'outline'} className='w-full border-blue-300 bg-transparent text-blue-300 hover:bg-blue-300 hover:text-bg-100' size={'lg'}>
          Go to my orders
        </Button>
      </div>

      <div className='mt-10 flex flex-col gap-2'>
        <h3 className='text-xl font-bold mb-4'>Order details</h3>
        <ProductOrderItemSkeleton />
        <p>
          <Skeleton className='w-32 h-6' />
        </p>
      </div>
    </section>
  )
}

export default OrderInfoSkeleton
