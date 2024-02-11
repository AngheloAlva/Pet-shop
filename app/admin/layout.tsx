import { auth } from '@clerk/nextjs/server'
import AdminNavbar from '../components/admin/navbar/Navbar'
import VerticalAdminNavbar from '../components/admin/navbar/Vertical-navbar'
import { getUserById } from '../lib/api/user/user'

async function AdminLayout (
  { children }: Readonly<{ children: React.ReactNode }>
): Promise<React.ReactElement> {
  const { userId } = auth()

  if (userId === null) return (<></>)
  const user = await getUserById(userId)

  if (user.role !== 'ADMIN') {
    return (
      <main className='flex flex-col gap-7 pt-4 md pb-20 px-5 text-text-100'>
        <h1 className='text-2xl font-bold'>You are not authorized to view this page</h1>
      </main>
    )
  }

  return (
    <>
      <AdminNavbar />
      <div className='md:flex'>
        <VerticalAdminNavbar />
        {children}
      </div>
    </>
  )
}

export default AdminLayout
