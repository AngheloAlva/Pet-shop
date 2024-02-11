import FilterSectionSkeleton from './Filter-section-skeleton'
import ProductCardSkeleton from './Product-card-skeleton'
import { Skeleton } from '../ui/skeleton'

function ProductsPageSkeleton (): React.ReactElement {
  return (
    <main className='flex flex-col gap-5'>
      <section className='flex flex-col'>
        <Skeleton className='w-full h-32' />
      </section>

      <div className='flex gap-4'>
        <FilterSectionSkeleton />
        <section className='w-full grid grid-cols-1 xs:grid-cols-2 gap-x-2 gap-y-4 md:grid-cols-3 xl:grid-cols-4'>
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
        </section>
      </div>

      <div className='w-full flex items-center justify-center gap-2'>
        <Skeleton className='w-10 h-10' />
        <Skeleton className='w-10 h-10' />
        <Skeleton className='w-10 h-10' />
      </div>
    </main>
  )
}

export default ProductsPageSkeleton
