import { getProducts } from '@/app/lib/api/shop/product'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../ui/card'
import Link from 'next/link'
import { Button } from '@/app/components/ui/button'

async function AdminProductsInfo (): Promise<React.ReactElement> {
  const { total } = await getProducts({
    isAvailable: true,
    limit: 1,
    page: 1
  })

  return (
    <Card className='flex  flex-col items-center justify-between'>
      <div className='flex w-full items-center justify-between'>
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
      </div>

      <Link href='/admin/products' className='w-full pb-6 px-6'>
        <Button variant={'outline'} className='w-full'>
          View details
        </Button>
      </Link>
    </Card>
  )
}

export default AdminProductsInfo
