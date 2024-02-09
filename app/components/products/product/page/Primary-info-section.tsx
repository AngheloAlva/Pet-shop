'use client'

import AddProductButton from '@/app/components/shared/ui/Add-product-button'
import { Button } from '@/app/components/ui/button'
import { calculateDiscount } from '@/app/helpers/calculateDiscount'
import type { Product } from '@/types/shop/products.types'
import Link from 'next/link'
import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa6'

interface creamInfoSectionProps {
  product: Product
}

function creamInfoSection (
  { product }: creamInfoSectionProps
): React.ReactElement {
  const [optionSelected, setOptionSelected] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const handleAdd = (): void => {
    if (product.options?.[optionSelected].stock > quantity) {
      setQuantity(quantity + 1)
    }
  }

  const handleSubtract = (): void => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleOptionChange = (index: number): void => {
    setOptionSelected(index)
    setQuantity(1)
  }

  return (
    <section className='flex flex-col gap-2 text-text-100 lg:pt-10 md:w-1/2 xl:w-2/3'>
      <h1 className='text-4xl tracking-wide font-bold text-blue text-pretty'>
        {product.name}
      </h1>
      <Link href={`/brands/${product.brand?.slug}`} className='w-fit'>
        <h2 className='text-xl font-bold text-cream-700'>
          {product.brand?.name}
        </h2>
      </Link>

      <p className='text-text-200 text-sm text-pretty'>
        {product.miniDesc}
      </p>

      <span className='text-2xl font-semibold mt-4'>
        {
          product.options?.[optionSelected].discount > 0
            ? (<>
                <span className='text-cream-500 ml-2'>
                  {calculateDiscount(
                    product.options?.[optionSelected].price,
                    product.options?.[optionSelected].discount
                  )?.toLocaleString()}
                </span>
                <span className='line-through text-gray-500'>
                  {'$' + (product.options?.[optionSelected].price)?.toLocaleString()}
                </span>
              </>)
            : '$' + (product.options?.[optionSelected].price)?.toLocaleString()
        }
      </span>

      <div className='my-4'>
        <div className='flex flex-wrap gap-2'>
          {
            product.options?.map((option, index) => (
              <Button
                size={'default'}
                key={option.id}
                variant={'secondary'}
                disabled={option.stock === 0}
                onClick={() => { handleOptionChange(index) }}
                className={optionSelected === index
                  ? 'bg-cream-600 hover:bg-bg-cream-600 text-bg-100'
                  : '' +
                  'border bg-transparent border-input rounded-lg w-fit px-3 py-1 transition-colors hover:bg-cream-500 hover:text-bg-100'
                }
              >
                {option.name}
              </Button>
            ))
          }
        </div>
        <p className='text-text-200 text-sm mt-1'>
          {product.options?.[optionSelected].stock} in stock
        </p>
      </div>

      <div className='flex w-full gap-2 items-center'>
        <Button variant={'outline'} className='min-w-11 min-h-11' onClick={handleSubtract}>
          <FaMinus className='text-text-200' />
        </Button>
        <Button variant={'outline'} className='text-text-200 min-w-11 min-h-11 hover:bg-white cursor-default'>
          {quantity}
        </Button>
        <Button variant={'outline'} className='min-w-11 min-h-11' onClick={handleAdd}>
          <FaPlus className='text-text-200' />
        </Button>

        <AddProductButton
          optionSelectedIndex={optionSelected}
          quantity={quantity}
          product={product}
        />
      </div>
    </section>
  )
}

export default creamInfoSection
