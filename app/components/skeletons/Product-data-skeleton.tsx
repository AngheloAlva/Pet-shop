import { FaMinus, FaPlus } from 'react-icons/fa6'
import { Skeleton } from '../ui/skeleton'
import { Button } from '../ui/button'

export default function ProductDataSkeleton (): React.ReactElement {
  return (
    <>
      <div className='flex flex-col gap-10 md:flex-row'>
        <section className='w-full h-full lg:w-2/5 flex flex-col gap-4 items-center md:w-auto'>
          <div className='p-7 w-full bg-white rounded-lg border border-input overflow-hidden max-w-md xl:max-w-lg'>
            <Skeleton className='min-w-80 min-h-80' />
          </div>
          <Skeleton className='w-full h-10' />
        </section>

        <section className='flex flex-col gap-2 text-text-100 lg:pt-10 md:w-1/2 xl:w-2/3'>
          <h1 className='text-4xl tracking-wide font-bold text-blue text-pretty'>
            <Skeleton className='w-3/4 h-8' />
          </h1>
          <Skeleton className='w-1/2 h-5' />
          <p className='text-text-200 text-sm text-pretty'>
            <Skeleton className='w-full h-20' />
          </p>

          <span className='text-2xl font-semibold mt-4 space-x-2'>
            <Skeleton className='w-1/4 h-8' />
          </span>

          <div className='my-4'>
            <div className='flex flex-wrap gap-2'>
              <Skeleton className='w-20 h-10' />
              <Skeleton className='w-20 h-10' />
              <Skeleton className='w-20 h-10' />
            </div>
            <p className='text-text-200 text-sm mt-1'>
              <Skeleton className='w-1/2 h-5' /> in stock
            </p>
          </div>

          <div className='flex w-full gap-2 items-center'>
            <Button variant={'outline'} className='min-w-11 min-h-11'>
              <FaMinus className='text-text-200' />
            </Button>
            <Button variant={'outline'} className='text-text-200 min-w-11 min-h-11 hover:bg-white cursor-default'>
              <Skeleton className='w-6 h-6' />
            </Button>
            <Button variant={'outline'} className='min-w-11 min-h-11'>
              <FaPlus className='text-text-200' />
            </Button>

            <Skeleton className='w-1/2 h-10' />
          </div>
        </section>
      </div>

      <section className='flex flex-col gap-4 text-text-100 lg:pt-10'>
        <h2 className='text-xl font-bold'>Description</h2>
        <Skeleton className='w-full h-48' />
        <Skeleton className='w-full h-48' />
      </section>
    </>
  )
}
