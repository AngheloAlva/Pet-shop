'use client'

import { calculateDiscount } from '@/app/helpers/calculateDiscount'
import { useState } from 'react'
import Link from 'next/link'

import AddProductButton from './Add-product-button'
import { Button } from '../../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../../ui/card'

import type { Product } from '@/types/shop/products.types'
import Image from 'next/image'

function ProductCard ({ product }: { product: Product }): React.ReactElement {
  const [optionSelected, setOptionSelected] = useState(0)

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
            <Image
              src={product.images[0]}
              alt={product.name}
              width={300}
              height={300}
              className='h-full object-contain rounded-lg'
            />
        </CardHeader>
      </Link>
      <CardContent className='flex flex-col'>
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
                    {(product.options?.[optionSelected].price)?.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
                  </span>
                  <span className='text-blue-500 ml-2'>
                    {calculateDiscount(
                      product.options?.[optionSelected].price,
                      product.options?.[optionSelected].discount
                    )?.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
                  </span>
                </>)
              : (product.options?.[optionSelected].price)?.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })
          }
        </span>

        <div className='flex flex-wrap gap-2 text-xs my-4'>
          {
            product.options?.map((option, index) => (
              <Button
                size={'sm'}
                key={option.id}
                variant={'secondary'}
                disabled={option.stock === 0}
                onClick={() => { setOptionSelected(index) }}
                className={optionSelected === index
                  ? 'bg-cream-600 hover:bg-cream-600 text-bg-100'
                  : '' +
                  'border bg-transparent border-input rounded-lg w-fit px-3 py-1 transition-colors hover:bg-cream-500 hover:text-bg-100'
                }
              >
                {option.name}
              </Button>
            ))
          }
        </div>

        <AddProductButton
          optionSelectedIndex={optionSelected}
          product={product}
          className=''
          quantity={1}
        />
      </CardContent>
    </Card>
  )
}

export default ProductCard
