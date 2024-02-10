import { getProducts } from '@/app/lib/api/shop/product'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../ui/card'

async function AdminProductsInfo (): Promise<React.ReactElement> {
  const { total } = await getProducts({
    isAvailable: true,
    limit: 1,
    page: 1
  })

  return (
    <Card className='flex items-center justify-between'>
      <CardHeader>
        <CardTitle className='text-xl'>
          Products
        </CardTitle>
        <CardDescription>
          Total number of products
        </CardDescription>
      </CardHeader>
      <CardContent className="text-4xl font-semibold p-6">
        {total}
      </CardContent>
    </Card>
  )
}

export default AdminProductsInfo
