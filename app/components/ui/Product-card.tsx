import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card'

import type { Product } from '@/types/shop/products.types'
import { Button } from './button'
import Link from 'next/link'

function ProductCard ({ product }: { product: Product }): React.ReactElement {
  const [optionSelected, setOptionSelected] = useState(0)

  const calculateDiscount = (price: number, discount: number): number => {
    return price - (price * (discount / 100))
  }

  return (
    <Card className='h-full w-full'>
      <Link href={`/products/${product.slug}`}>
        <CardHeader className='flex items-center justify-center h-72 w-full p-0 relative overflow-hidden'>
            {product.options?.[optionSelected].discount > 0
              ? <span className='absolute top-2 right-2 bg-red-200 text-red-600 px-3 py-1 rounded-md font-bold z-50'>
                  {product.options?.[optionSelected].discount + '% OFF'}
                </span>
              : null
            }
            <img
              src={product.images[0]}
              alt={product.name}
              className='h-full object-contain rounded-lg'
            />
        </CardHeader>
      </Link>
      <CardContent className='flex flex-col gap-2'>
        <Link href={`/products/${product.slug}`}>
          <CardTitle>
            {product.name}
          </CardTitle>
        </Link>
        <Link href={`/brands/${product.brand?.slug}`}>
          <CardDescription>
            {product.brand?.name}
          </CardDescription>
        </Link>

        <span className='cursor-default'>
          {
            product.options?.[optionSelected].discount > 0
              ? (<>
                  <span className='line-through text-sm text-gray-500'>
                    {'$' + (product.options?.[optionSelected].price)?.toLocaleString()}
                  </span>
                  <span className='text-primary-500 ml-2'>
                    {calculateDiscount(
                      product.options?.[optionSelected].price,
                      product.options?.[optionSelected].discount
                    )?.toLocaleString()}
                  </span>
                </>)
              : '$' + (product.options?.[optionSelected].price)?.toLocaleString()
          }
        </span>

        <div className='flex flex-wrap gap-2 text-xs mt-4'>
          {
            product.options?.map((option, index) => (
              <Button
                size={'sm'}
                key={option.id}
                variant={'secondary'}
                onClick={() => { setOptionSelected(index) }}
                className={optionSelected === index
                  ? 'bg-primary-100 hover:bg-bg-primary-100 text-bg-100'
                  : '' +
                  'border bg-transparent border-input rounded-lg w-fit px-3 py-1 transition-colors hover:bg-primary-200 hover:text-bg-100'
                }
              >
                {option.name}
              </Button>
            ))
          }
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductCard
