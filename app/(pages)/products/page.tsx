'use client'

import ProductsPageSkeleton from '@/app/components/skeletons/Products-page-skeleton'
import ProductsSection from '@/app/components/products/page/Products-section'
import useProducts from '@/app/hooks/useProducts'

function ProductPage (): React.ReactElement {
  const limit = 12
  const { products, isLoading, total, page, setPage, setFilters, filters } = useProducts({
    InitialFilters: {},
    isAvailable: true,
    limit
  })

  return (
    <>
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
    </>
  )
}

export default ProductPage
