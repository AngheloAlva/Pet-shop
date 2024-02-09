import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { Skeleton } from '../ui/skeleton'

function UserFormSkeleton (): React.ReactElement {
  return (
    <Card className='py-4 px-6'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Skeleton className='h-10 w-full' />
          <Skeleton className='h-10 w-full' />
          <Skeleton className='h-10 w-full' />
          <Skeleton className='h-10 w-full' />

          <Button className='mt-4 bg-blue-400 hover:bg-blue-300'>
            <Skeleton className='h-6 w-44 bg-bg-100' />
          </Button>
        </div>
    </Card>
  )
}

export default UserFormSkeleton
