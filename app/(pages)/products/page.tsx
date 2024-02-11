'use client'

import ProductsPageSkeleton from '@/app/components/skeletons/Products-page-skeleton'
import ProductsSection from '@/app/components/products/page/Products-section'
import useProducts from '@/app/hooks/shop/useProducts'

function ProductPage (): React.ReactElement {
  const limit = 12
  const { products, isLoading, total, page, setPage, setFilters, filters } = useProducts({
    InitialFilters: {},
    isAvailable: true,
    limit
  })

  return (
    <main className='flex flex-col gap-5 pt-28 pb-20 px-5 sm:px-10 md:px-20 text-text-100'>
      {
        isLoading
          ? (
            <ProductsPageSkeleton />
            )
          : (
              <ProductsSection
                page={page}
                total={total}
                limit={limit}
                filters={filters}
                setPage={setPage}
                products={products}
                setFilters={setFilters}
              />
            )
      }
    </main>
  )
}

export default ProductPage
