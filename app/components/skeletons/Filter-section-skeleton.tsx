import { Separator } from '../ui/separator'
import { Skeleton } from '../ui/skeleton'

function FilterSectionSkeleton (): React.ReactElement {
  return (
    <div className='hidden lg:block w-1/5'>
      <h2 className='text-lg font-bold'>Filters</h2>
      <Separator />
      <div className='flex flex-col gap-4 mt-2'>
        <Skeleton className='w-full h-28' />
        <Separator />
        <Skeleton className='w-full h-28' />
        <Separator />
        <Skeleton className='w-full h-28' />
        <Separator />
        <Skeleton className='w-full h-28' />
      </div>
    </div>
  )
}

export default FilterSectionSkeleton
