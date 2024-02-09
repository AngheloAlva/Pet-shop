import { Card, CardContent, CardTitle } from '../ui/card'
import { Skeleton } from '../ui/skeleton'

function AddressCardSkeleton (): React.ReactElement {
  return (
    <Card>
      <CardContent>
        <CardTitle className='mt-5 mb-2 text-xl flex items-center justify-between text-blue-500 font-bold'>
          <Skeleton className="w-28 h-8" />
          <Skeleton className="w-14 h-8" />
        </CardTitle>

        <div className='text-text-200 flex-col flex gap-1'>
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-full h-6" />
        </div>
      </CardContent>
    </Card>
  )
}

export default AddressCardSkeleton
