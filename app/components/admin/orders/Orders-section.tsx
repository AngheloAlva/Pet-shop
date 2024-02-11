'use client'

import useOrdersWithPagination from '@/app/hooks/useOrdersWithPagination'

import ProductsSectionSkeleton from '../skeletons/Products-section-skeleton'
import PaginationButtons from '../../shared/ui/Pagination-buttons'
import OrderItem from './Order-item'

function AdminOrdersSection (
  { authId }: { authId: string }
): React.ReactElement {
  const limit = 10
  const { isLoading, orders, page, setPage, total } = useOrdersWithPagination({
    limit,
    authId
  })

  return (
    <>
      {
        isLoading
          ? (<ProductsSectionSkeleton />)
          : (
              <section className='flex flex-col gap-2'>
                <div className='flex items-center justify-between w-full'>
                  <h2 className='text-lg font-bold'>Orders</h2>
                  <p>{total} orders</p>
                </div>
                <div className='flex gap-4'>
                  <section className='grid grid-cols-1 gap-x-2 gap-y-4 md:grid-cols-2 xl:grid-cols-3'>
                    {orders.map((order) => (
                      <OrderItem key={order.id} order={order} />
                    ))}
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

export default AdminOrdersSection
