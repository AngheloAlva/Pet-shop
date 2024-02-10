import { getBrands } from '@/app/lib/api/shop/brand'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../ui/card'

async function AdminBrandsInfo (): Promise<React.ReactElement> {
  const { total } = await getBrands({
    isAvailable: true,
    limit: 1,
    page: 1
  })

  return (
    <Card className='flex items-center justify-between'>
      <CardHeader>
        <CardTitle className='text-xl'>
          Brands
        </CardTitle>
        <CardDescription>
          Total number of brands
        </CardDescription>
      </CardHeader>
      <CardContent className="text-4xl font-semibold p-6">
        {total}
      </CardContent>
    </Card>
  )
}

export default AdminBrandsInfo
