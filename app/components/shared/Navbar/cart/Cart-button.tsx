'use client'

import { useCartStore } from '@/app/store/cart-store'
import useCart from '@/app/hooks/useCart'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'

import { Button } from '@/app/components/ui/button'
import { FaBasketShopping } from 'react-icons/fa6'
import ProductCartItem from './Product-cart-item'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/app/components/ui/popover'

function CartButton (): React.ReactElement {
  const { user } = useUser()
  const { isLoading } = useCart(user?.id)
  const { products } = useCartStore()

  return (
    <Popover>
      <PopoverTrigger className='text-text-100 hover:text-bg-100 hover:bg-primary-100 p-1 rounded-lg transition-colors cursor-pointer'>
        <FaBasketShopping className='w-7 h-7' />
      </PopoverTrigger>
      <PopoverContent className='w-[25rem]'>
        <div className='flex flex-col'>
          {isLoading && <p>Loading...</p>}
          {!isLoading && products.length === 0 &&
            <p className='text-center font-semibold'>
              No hay productos en el carrito
            </p>
          }
          {!isLoading && products.length > 0 && (
            <div className='flex flex-col gap-5'>
              {products.map((product, index) => {
                if (index >= 3) {
                  return null
                }

                return (
                  <ProductCartItem
                    key={product.id}
                    productCart={product}
                    authId={user?.id ?? ''}
                  />
                )
              })}
            </div>
          )}

          <Link href='/checkout'>
            <Button variant={'outline'} className='mt-5 w-full'>
              Go to Checkout
            </Button>
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default CartButton
