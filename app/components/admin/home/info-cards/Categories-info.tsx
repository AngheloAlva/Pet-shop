import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../ui/card'
import { getCategories } from '@/app/lib/api/shop/category'

async function AdminCategoriesInfo (): Promise<React.ReactElement> {
  const { total } = await getCategories({
    isAvailable: true,
    limit: 1,
    page: 1
  })

  return (
    <Card className='flex items-center justify-between'>
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
    </Card>
  )
}

export default AdminCategoriesInfo
