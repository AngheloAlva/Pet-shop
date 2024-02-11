import Link from 'next/link'

import AdminCategoriesSection from '@/app/components/admin/categories/Categories-section'
import { Separator } from '@/app/components/ui/separator'
import { Button } from '@/app/components/ui/button'

function AdminCategoriesPage (): React.ReactElement {
  return (
    <main className='flex flex-col gap-7 pt-4 md pb-20 px-5 text-text-100'>
      <div className='flex flex-col gap-2 sm:flex-row'>
        <Link href='/admin/categories/create' className='w-full'>
          <Button className='bg-blue-400 w-full hover:bg-blue-300'>
            Create Category
          </Button>
        </Link>
        <Link href='/admin/categories/deleted' className='w-full'>
          <Button className='bg-gray-600 w-full hover:bg-gray-500'>
            Deleted Categories
          </Button>
        </Link>
      </div>

      <Separator />

      <AdminCategoriesSection />
    </main>
  )
}

export default AdminCategoriesPage
