import { FaMinus, FaPlus, FaTrashCan } from 'react-icons/fa6'
import { Button } from '../ui/button'
import { Skeleton } from '../ui/skeleton'

function ProductCartItemSkeleton (): React.ReactElement {
  return (
    <div className='flex gap-2'>
      <Skeleton className="w-20 h-20" />

      <div className='flex items-start w-full text-text-200'>
        <div className='flex flex-col w-full gap-2'>
          <Skeleton className='h-10 w-full sm:h-5' />
          <Skeleton className='h-4 w-24' />
          <Skeleton className='h-4 w-24' />
          <Skeleton className='h-5 w-24' />
        </div>

        <div className='w-full flex flex-col justify-between items-end h-full'>
          <Button size={'sm'} variant={'destructive'}>
            <FaTrashCan />
          </Button>

          <div className='flex gap-1 text-text-200'>
            <Button size={'sm'} variant={'outline'}>
              <FaMinus />
            </Button>
            <Button size={'sm'} variant={'outline'} className='text-text-200 hover:bg-white cursor-default'>
              <Skeleton className='h-4 w-3' />
            </Button>
            <Button size={'sm'} variant={'outline'}>
              <FaPlus />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCartItemSkeleton
