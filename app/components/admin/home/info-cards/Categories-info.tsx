import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../ui/card'
import { getCategories } from '@/app/lib/api/shop/category'
import { Button } from '@/app/components/ui/button'

async function AdminCategoriesInfo (): Promise<React.ReactElement> {
  const { total } = await getCategories({
    isAvailable: true,
    limit: 1,
    page: 1
  })

  return (
    <Card className='flex  flex-col items-center justify-between'>
      <div className='flex w-full items-center justify-between'>
        <CardHeader>
          <CardTitle className='text-xl'>
            Categories
          </CardTitle>
          <CardDescription>
            Total number of categories
          </CardDescription>
        </CardHeader>
        <CardContent className="text-4xl font-semibold p-6">
          {total}
        </CardContent>
      </div>

      <Link href='/admin/categories' className='w-full pb-6 px-6'>
        <Button variant={'outline'} className='w-full'>
          View details
        </Button>
      </Link>
    </Card>
  )
}

export default AdminCategoriesInfo
