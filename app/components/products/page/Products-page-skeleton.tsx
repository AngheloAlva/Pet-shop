import FilterSectionSkeleton from '../../shared/filter/Filter-section-skeleton'
import ProductCardSkeleton from '../../shared/ui/Product-card-skeleton'
import { Skeleton } from '../../ui/skeleton'

function ProductsPageSkeleton (): React.ReactElement {
  return (
    <main className='flex flex-col gap-5 pt-5 pb-20 px-5 sm:px-10 md:px-20 text-text-100'>
      <section className='flex flex-col'>
        <div className='max-w-xl'>
          <h1 className='text-xl font-bold text-nowrap'>All Products</h1>
          <Skeleton className='w-32 h-6' />
        </div>
        <div className='w-full flex items-center justify-end lg:hidden'>
          <Skeleton className='w-20 h-9' />
        </div>
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
