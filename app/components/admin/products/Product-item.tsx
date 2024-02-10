import type { Product } from '@/types/shop/products.types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card'
import Image from 'next/image'
import { Button } from '../../ui/button'
import AlertDeleteProduct from './Alert-delete-product'
import { useUser } from '@clerk/nextjs'

function AdminProductItem (
  { product, refresh }: { product: Product, refresh: () => Promise<void> }
): React.ReactElement {
  const { user } = useUser()

  return (
    <Card className='flex items-center'>
      <CardHeader className='p-2'>
        <Image
          src={product.images[0]}
          alt={product.name}
          width={300}
          height={300}
          className='h-auto w-24 object-contain rounded-lg'
        />
      </CardHeader>

      <CardContent className='flex flex-col p-5 w-full'>
        <CardTitle>
          {product.name}
        </CardTitle>
        <CardDescription>
          {product.brand?.name}
        </CardDescription>

        <div className='flex flex-wrap gap-2 text-xs mt-2'>
          {
            product.options?.map((option, index) => (
              <Button
                size={'sm'}
                key={option.id}
                variant={'secondary'}
                disabled={option.stock === 0}
                className={'border bg-transparent border-input rounded-lg w-fit px-3 py-1 hover:bg-white cursor-default'}
              >
                {option.name} - {option.price}
              </Button>
            ))
          }
        </div>
      </CardContent>

      <div className='pr-2 flex flex-col gap-2 w-1/4'>
        <Button variant={'outline'} size={'sm'} className='w-full'>
          Edit
        </Button>
        {
          user?.id !== undefined && (
            <AlertDeleteProduct
              productId={product.id}
              authId={user?.id}
              refresh={refresh}
            />
          )
        }
      </div>
    </Card>
  )
}

export default AdminProductItem
