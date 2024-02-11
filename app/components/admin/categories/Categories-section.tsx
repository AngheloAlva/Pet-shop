'use client'

import useCategoriesWithPagination from '@/app/hooks/admin/useCategoriesWithPagination'
import PaginationButtons from '../../shared/ui/Pagination-buttons'
import ProductsSectionSkeleton from '../skeletons/Products-section-skeleton'
import AdminCategoryItem from './Category-item'

function AdminCategoriesSection (): React.ReactElement {
  const limit = 10
  const { categories, isLoading, total, page, setPage } = useCategoriesWithPagination({
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
                  <h2 className='text-lg font-bold'>Categories</h2>
                  <p>{total} categories</p>
                </div>
                <div className='flex gap-4'>
                  <section className='grid grid-cols-1 gap-x-2 gap-y-4 md:grid-cols-2 xl:grid-cols-3'>
                    {categories.length > 0 && (
                      categories.map((category) => (
                        <AdminCategoryItem key={category.id} category={category} />
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

export default AdminCategoriesSection
