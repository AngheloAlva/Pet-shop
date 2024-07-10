import { Skeleton } from '../../ui/skeleton'
import ProductItemSkeleton from './Product-item-skeleton'

function ProductsSectionSkeleton (): React.ReactElement {
  return (
    <section className='space-y-2 w-full'>
      <div className='flex items-center justify-between w-full'>
        <h2 className='text-lg font-bold'>Products</h2>
        <div className='flex items-center gap-2'>
          <Skeleton className="w-14 h-5" /> products
        </div>
        <Skeleton className="w-20 h-5" />
      </div>
      <div className='flex gap-4 w-full'>
        <section className='grid grid-cols-1 gap-x-2 gap-y-4 lg:grid-cols-2 xl:grid-cols-3'>
          {Array.from({ length: 10 }).map((_, i) => (
            <ProductItemSkeleton key={i} />
          ))}
        </section>
      </div>

      <div className='w-full flex items-center justify-center gap-2 mt-5'>
        <Skeleton className="w-52 h-10" />
      </div>
    </section>
  )
}

export default ProductsSectionSkeleton
