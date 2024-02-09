import { Skeleton } from '../ui/skeleton'

function ProductOrderItemSkeleton (): React.ReactElement {
  return (
    <div className='flex gap-5'>
      <Skeleton className='w-20 h-20' />
      <div className='space-y-2 w-full'>
        <p className='font-semibold'>
          <Skeleton className='w-full h-4' />
        </p>
        <p>
          <Skeleton className='w-20 h-4' />
        </p>
        <p>
          <Skeleton className='w-20 h-4' />
        </p>
      </div>
    </div>
  )
}

export default ProductOrderItemSkeleton
