import AdminNavbar from '../components/admin/navbar/Navbar'
import VerticalAdminNavbar from '../components/admin/navbar/Vertical-navbar'

function AdminLayout (
  { children }: Readonly<{ children: React.ReactNode }>
): React.ReactElement {
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
