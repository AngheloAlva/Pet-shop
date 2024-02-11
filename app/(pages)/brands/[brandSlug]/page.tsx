'use client'

import useProducts from '@/app/hooks/shop/useProducts'

import PaginationButtons from '@/app/components/shared/ui/Pagination-buttons'
import ProductCard from '@/app/components/shared/ui/Product-card'

function BrandBySlugPage (
  { params }: { params: { brandSlug: string } }
): React.ReactElement {
  const limit = 10
  const { products, isLoading, page, setPage, total } = useProducts({
    InitialFilters: { brandSlug: params.brandSlug },
    isAvailable: true,
    limit
  })

  return (
    <>
      {
        (!isLoading && products.length >= 1) && (
          <main className='flex flex-col gap-5 pb-20 px-5 sm:px-10 md:px-20 lg:px-40 text-text-100 pt-28 md:pt-40'>
            <section className='max-w-xl'>
              <img
                src={products[0].brand?.image}
                alt={products[0].brand?.name}
                className='w-32 h-auto'
              />
              <h1 className='text-xl font-bold'>
                {products[0].brand?.name}
              </h1>
              <p className='text-muted-foreground'>We have a wide range of products for this brand</p>
            </section>

            <section className='grid grid-cols-1 xs:grid-cols-2 gap-x-2 gap-y-4 md:grid-cols-3 lg:grid-cols-4'>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </section>

            <div className='w-full flex items-center justify-center gap-2'>
              <PaginationButtons
                setPage={setPage}
                limit={limit}
                total={total}
                page={page}
              />
            </div>
          </main>
        )
      }

      {
        (!isLoading && products.length === 0) && (
          <main className='flex flex-col gap-5 pb-20 px-5 sm:px-10 md:px-20 lg:px-40 text-text-100 pt-28 md:pt-40'>
            <section className='max-w-xl'>
              <h1 className='text-xl font-bold'>No products found</h1>
              <p className='text-muted-foreground'>We couldn't find any products for this brand</p>
            </section>
          </main>
        )
      }
    </>
  )
}

export default BrandBySlugPage
