import Image from 'next/image'
import AdminSheetMenu from './Sheet-menu'

function AdminNavbar (): React.ReactElement {
  return (
    <nav className="flex items-center justify-between px-5 py-2">
      <Image src="/images/logo.svg" alt="logo" width={50} height={50} />

      <AdminSheetMenu />
    </nav>
  )
}

export default AdminNavbar
