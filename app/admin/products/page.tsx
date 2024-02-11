import AdminProductsSection from '@/app/components/admin/products/Products-section'
import { Button } from '@/app/components/ui/button'
import { Separator } from '@/app/components/ui/separator'
import Link from 'next/link'

function AdminProductsPage (): React.ReactElement {
  return (
    <main className='flex flex-col gap-7 pt-4 md pb-20 px-5 text-text-100'>
      <div className='flex flex-col gap-2 sm:flex-row'>
        <Link href='/admin/products/create' className='w-full'>
          <Button className='bg-blue-400 w-full hover:bg-blue-300'>
            Create Product
          </Button>
        </Link>
        <Link href='/admin/products/deleted' className='w-full'>
          <Button className='bg-gray-600 w-full hover:bg-gray-500'>
            Deleted Products
          </Button>
        </Link>
      </div>

      <Separator />

      <AdminProductsSection />
    </main>
  )
}

export default AdminProductsPage
