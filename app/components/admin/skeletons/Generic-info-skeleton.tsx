import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card'
import { Skeleton } from '../../ui/skeleton'

function GenericInfoSkeleton (): React.ReactElement {
  return (
    <Card className='flex items-center justify-between'>
      <CardHeader>
        <CardTitle>
          <Skeleton className='w-20 h-8' />
        </CardTitle>
        <CardDescription>
          <Skeleton className='w-36 h-5' />
        </CardDescription>
      </CardHeader>
      <CardContent className="text-4xl font-semibold p-6">
        <Skeleton className='w-20 h-10' />
      </CardContent>
    </Card>
  )
}

export default GenericInfoSkeleton
