import { Suspense } from 'react'

import GenericInfoSkeleton from '../components/admin/skeletons/Generic-info-skeleton'
import AdminCategoriesInfo from '../components/admin/home/info-cards/Categories-info'
import AdminProductsInfo from '../components/admin/home/info-cards/Products-info'
import AdminBrandsInfo from '../components/admin/home/info-cards/Brands-info'
import AdminOrdersInfo from '../components/admin/home/info-cards/Orders-info'

function AdminDashboardPage (): React.ReactElement {
  return (
    <main className='flex flex-col gap-7 pt-4 md pb-20 px-5 text-text-100'>
      <section className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4'>
        <Suspense fallback={<GenericInfoSkeleton />}>
          <AdminProductsInfo />
        </Suspense>

        <Suspense fallback={<GenericInfoSkeleton />}>
          <AdminCategoriesInfo />
        </Suspense>

        <Suspense fallback={<GenericInfoSkeleton />}>
          <AdminBrandsInfo />
        </Suspense>

        <Suspense fallback={<GenericInfoSkeleton />}>
          <AdminOrdersInfo />
        </Suspense>
      </section>

    </main>
  )
}

export default AdminDashboardPage
