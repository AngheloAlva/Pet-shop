import AdminOrdersSection from '@/app/components/admin/orders/Orders-section'
import { auth } from '@clerk/nextjs'

function AdminOrdersPage (): React.ReactElement {
  const { userId } = auth()

  return (
    <main className='flex flex-col gap-7 pt-4 md pb-20 px-5 text-text-100'>
      {
        userId !== null && (
          <AdminOrdersSection authId={userId} />
        )
      }
    </main>
  )
}

export default AdminOrdersPage
