import { Card, CardContent, CardHeader } from '../../ui/card'
import { Skeleton } from '../../ui/skeleton'

function ProductCardSkeleton (): React.ReactElement {
  return (
    <Card className='h-full w-full'>
      <CardHeader className='flex items-center justify-center h-72 w-full relative p-6'>
        <Skeleton className='h-full w-full' />
      </CardHeader>
      <CardContent className='flex flex-col gap-2'>
        <Skeleton className='h-6 w-full' />
        <Skeleton className='h-4 w-1/4' />
        <div>
          <Skeleton className='h-6 w-1/3' />
        </div>

        <div className='flex flex-wrap gap-2 text-xs mt-4'>
          <Skeleton className='h-8 w-1/4' />
          <Skeleton className='h-8 w-1/4' />
          <Skeleton className='h-8 w-1/4' />
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductCardSkeleton
