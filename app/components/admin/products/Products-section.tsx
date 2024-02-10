'use client'

import useProducts from '@/app/hooks/useProducts'

import PaginationButtons from '../../shared/ui/Pagination-buttons'
import FilterButton from '../../shared/filter/Filter-button'
import AdminProductItem from './Product-item'
import ProductsSectionSkeleton from '../skeletons/Products-section-skeleton'

function AdminProductsSection (): React.ReactElement {
  const limit = 10
  const { products, total, setFilters, filters, setPage, page, isLoading, refresh } = useProducts({
    InitialFilters: {},
    isAvailable: true,
    limit
  })

  return (
    <>
      {
        isLoading
          ? (<ProductsSectionSkeleton />)
          : (
              <section className='space-y-2'>
                <div className='flex items-center justify-between w-full'>
                  <h2 className='text-lg font-bold'>Products</h2>
                  <p>{total} products</p>
                  <FilterButton filters={filters} setFilters={setFilters} />
                </div>
                <div className='flex gap-4'>
                  <section className='grid grid-cols-1 gap-x-2 gap-y-4 md:grid-cols-2 xl:grid-cols-3'>
                    {products.map((product) => (
                      <AdminProductItem key={product.id} product={product} refresh={refresh} />
                    ))}
                  </section>
                </div>

                <div className='w-full flex items-center justify-center gap-2 mt-5'>
                  <PaginationButtons
                    setPage={setPage}
                    limit={limit}
                    total={total}
                    page={page}
                  />
                </div>
              </section>
            )
      }
    </>
  )
}

export default AdminProductsSection
