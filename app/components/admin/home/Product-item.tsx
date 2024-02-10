import type { Product } from '@/types/shop/products.types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card'
import Image from 'next/image'
import { Button } from '../../ui/button'

function AdminProductItem (
  { product }: { product: Product }
): React.ReactElement {
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

      <CardContent className='flex flex-col p-5'>
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
    </Card>
  )
}

export default AdminProductItem
