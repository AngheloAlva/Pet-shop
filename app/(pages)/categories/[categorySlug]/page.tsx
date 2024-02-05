'use client'

import useProducts from '@/app/hooks/useProducts'

import PaginationButtons from '@/app/components/shared/ui/Pagination-buttons'
import ProductCard from '@/app/components/shared/ui/Product-card'

function CategoryBySlugPage (
  { params }: { params: { categorySlug: string } }
): React.ReactElement {
  const limit = 10
  const { products, isLoading, page, setPage, total } = useProducts({
    InitialFilters: { categorySlug: params.categorySlug },
    isAvailable: true,
    limit
  })

  return (
    <>
      {
        !isLoading && (
          <main className='flex flex-col gap-5 pt-5 pb-20 px-5 sm:px-10 md:px-20 lg:px-40 text-text-100'>
            <section className='max-w-xl'>
              <h1 className='text-xl font-bold'>{products[0].category?.name}</h1>
              <p className='text-muted-foreground'>{products[0]?.category?.description}</p>
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

export default CategoryBySlugPage
