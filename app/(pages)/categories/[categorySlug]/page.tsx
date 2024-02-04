'use client'

import useProducts from '@/app/hooks/useProducts'

import ProductCard from '@/app/components/shared/ui/Product-card'
import { Button } from '@/app/components/ui/button'

function CategoryBySlugPage (
  { params }: { params: { categorySlug: string } }
): React.ReactElement {
  const limit = 1
  const { products, isLoading, page, setPage, total } = useProducts({
    categorySlug: params.categorySlug,
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
            <section className='grid grid-cols-1 xs:grid-cols-2 gap-x-2 gap-y-4'>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </section>

            <div className='w-full flex items-center justify-center gap-2'>
              <Button
                onClick={() => { setPage(page - 1) } }
                disabled={page === 1}
              >
                Previous
              </Button>

              {
                Array.from({ length: Math.ceil(total / limit) }).map((_, index) => (
                  <Button
                    key={index}
                    onClick={() => { setPage(index + 1) } }
                    disabled={page === index + 1}
                  >
                    {index + 1}
                  </Button>
                ))
              }

              <Button
                onClick={() => { setPage(page + 1) } }
                disabled={page * limit >= total}
              >
                Next
              </Button>
            </div>
          </main>
        )
      }
    </>
  )
}

export default CategoryBySlugPage
