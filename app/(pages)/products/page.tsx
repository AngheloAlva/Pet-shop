'use client'

import FilterButtons from '@/app/components/shared/ui/Filter-button'
import PaginationButtons from '@/app/components/shared/ui/Pagination-buttons'
import ProductCard from '@/app/components/shared/ui/Product-card'
import useProducts from '@/app/hooks/useProducts'

function ProductPage (): React.ReactElement {
  const limit = 10
  const { products, isLoading, total, page, setPage } = useProducts({
    isAvailable: true,
    limit
  })

  return (
    <>
      {
        !isLoading && (
          <main className='flex flex-col gap-5 pt-5 pb-20 px-5 sm:px-10 md:px-20 lg:px-40 text-text-100'>
            <section className='flex flex-col gap-4'>
              <div className='max-w-xl'>
                <h1 className='text-xl font-bold'>{products[0].category?.name}</h1>
                <p className='text-muted-foreground'>{products[0]?.category?.description}</p>
              </div>
              <div className='w-full flex items-center justify-end'>
                <FilterButtons />
              </div>
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
    </>
  )
}

export default ProductPage
