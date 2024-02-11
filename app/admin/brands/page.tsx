import Link from 'next/link'

import AdminBrandsSection from '@/app/components/admin/brands/Brands-section'
import { Separator } from '@/app/components/ui/separator'
import { Button } from '@/app/components/ui/button'

function AdminBrandsPage (): React.ReactElement {
  return (
    <main className='flex flex-col gap-7 pt-4 md pb-20 px-5 text-text-100'>
      <div className='flex flex-col gap-2 sm:flex-row'>
        <Link href='/admin/brands/create' className='w-full'>
          <Button className='bg-blue-400 w-full hover:bg-blue-300'>
            Create Brand
          </Button>
        </Link>
        <Link href='/admin/brands/deleted' className='w-full'>
          <Button className='bg-gray-600 w-full hover:bg-gray-500'>
            Deleted Brands
          </Button>
        </Link>
      </div>

      <Separator />

      <AdminBrandsSection />
    </main>
  )
}

export default AdminBrandsPage
