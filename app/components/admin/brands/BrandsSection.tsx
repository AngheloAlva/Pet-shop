'use client'

import useBrandsWithPagination from '@/app/hooks/useBrandsWithPagination'

import ProductsSectionSkeleton from '../skeletons/Products-section-skeleton'
import PaginationButtons from '../../shared/ui/Pagination-buttons'
import AdminBrandItem from './Brand-item'

function AdminBrandsSection (): React.ReactElement {
  const limit = 10
  const { brands, isLoading, total, page, setPage } = useBrandsWithPagination({
    isAvailable: true,
    limit,
    page: 1
  })

  return (
    <>
      {
        isLoading
          ? (<ProductsSectionSkeleton />)
          : (
              <section className='flex flex-col gap-2'>
                <div className='flex items-center justify-between w-full'>
                  <h2 className='text-lg font-bold'>Brands</h2>
                  <p>{total} brands</p>
                </div>
                <div className='flex gap-4'>
                  <section className='grid grid-cols-1 gap-x-2 gap-y-4 md:grid-cols-2 xl:grid-cols-3'>
                    {brands.length > 0 && (
                      brands.map((brand) => (
                        <AdminBrandItem key={brand.id} brand={brand} />
                      ))
                    )}
                  </section>
                </div>

                <div className='w-full flex items-center justify-center gap-2 mt-7'>
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

export default AdminBrandsSection
