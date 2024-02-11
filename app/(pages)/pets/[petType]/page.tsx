'use client'

import useProducts from '@/app/hooks/shop/useProducts'

import ProductsPageSkeleton from '@/app/components/skeletons/Products-page-skeleton'
import PaginationButtons from '@/app/components/shared/ui/Pagination-buttons'
import ProductCard from '@/app/components/shared/ui/Product-card'

function PetTypePage (
  { params }: { params: { petType: string } }
): React.ReactElement {
  const limit = 10
  const { products, isLoading, page, setPage, total } = useProducts({
    InitialFilters: { petType: params.petType.toUpperCase() },
    isAvailable: true,
    limit
  })

  return (
    <main className='flex flex-col gap-5 pt-28 pb-20 px-5 sm:px-10 md:px-20 text-text-100'>
      {
        (!isLoading && products.length >= 1)
          ? (<>
              <section className='max-w-xl'>
                <h1 className='text-xl font-bold'>Products for {products[0].petType}</h1>
                <p className='text-muted-foreground'>We have a wide range of products for your {products[0].petType}</p>
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
            </>)
          : <ProductsPageSkeleton />
      }
    </main>
  )
}

export default PetTypePage
