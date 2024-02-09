import Link from 'next/link'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/app/components/ui/card'

import type { Product } from '@/types/shop/products.types'

function ProductSearchItem (
  { product }: { product: Product }
): React.ReactElement {
  return (
    <Card>
      <Link href={`/products/${product.slug}`} className='w-full h-full flex max-h-40 py-3 px-3 gap-2 cursor-pointer'>
        <CardHeader className='flex items-center justify-center h-full w-1/5 p-0 relative overflow-hidden'>
          <img
            src={product.images[0]}
            alt={product.name}
            className='h-full object-contain rounded-lg'
          />
        </CardHeader>
        <CardContent className='flex flex-col p-0'>
          <CardTitle>
            {product.name}
          </CardTitle>
          <CardDescription>
            {product.brand?.name}
          </CardDescription>

          <div className='cursor-default flex flex-col text-xs'>
            {
              product.options?.map((option) => (
                <span key={option.id}>{option.name + ': ' + option.price}</span>
              ))
            }
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}

export default ProductSearchItem
