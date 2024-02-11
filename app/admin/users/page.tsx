import AdminUsersSection from '@/app/components/admin/users/Users-section'
import { auth } from '@clerk/nextjs'

function AdminUsersPage (): React.ReactElement {
  const { userId } = auth()

  return (
    <main className='flex flex-col gap-7 pt-4 md pb-20 px-5 text-text-100'>
      {
        userId !== null && (
          <AdminUsersSection authId={userId} />
        )
      }
    </main>
  )
}

export default AdminUsersPage
