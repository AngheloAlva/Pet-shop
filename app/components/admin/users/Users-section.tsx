'use client'

import useUsersWithPagination from '@/app/hooks/admin/useUsersWithPagination'

import ProductsSectionSkeleton from '../skeletons/Products-section-skeleton'
import PaginationButtons from '../../shared/ui/Pagination-buttons'
import UserItem from './User-item'

function AdminUsersSection (
  { authId }: { authId: string }
): React.ReactElement {
  const limit = 10
  const { isLoading, users, page, setPage, total } = useUsersWithPagination({
    isAvailable: true,
    authId,
    limit
  })

  return (
    <>
      {
        isLoading
          ? (<ProductsSectionSkeleton />)
          : (
              <section className='flex flex-col gap-2'>
                <div className='flex items-center justify-between w-full'>
                  <h2 className='text-lg font-bold'>Users</h2>
                  <p>{total} users</p>
                </div>
                <div className='flex gap-4'>
                  <section className='grid grid-cols-1 gap-x-2 gap-y-4 md:grid-cols-2 xl:grid-cols-3 w-full'>
                    {users.map((user) => (
                      <UserItem key={user.id} user={user} />
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

export default AdminUsersSection
