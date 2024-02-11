import { Card, CardContent } from '../../ui/card'
import { Skeleton } from '../../ui/skeleton'

function ProductItemSkeleton (): React.ReactElement {
  return (
    <Card className='flex items-center'>
      <div className='p-2'>
        <Skeleton className='h-28 w-24 object-contain rounded-lg' />
      </div>

      <CardContent className='flex flex-col p-5'>
        <div>
          <Skeleton className='w-3/4 h-5' />
        </div>
        <div>
          <Skeleton className='w-1/2 h-5 mt-2' />
        </div>

        <div className='flex flex-wrap gap-2 text-xs mt-2'>
          <Skeleton className='w-20 h-5' />
          <Skeleton className='w-20 h-5' />
          <Skeleton className='w-20 h-5' />
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductItemSkeleton
