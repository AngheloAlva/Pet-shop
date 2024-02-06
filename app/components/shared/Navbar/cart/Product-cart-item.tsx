/* eslint-disable @typescript-eslint/no-misused-promises */

import { removeProductFromCart } from '@/app/lib/api/shop/cart'
import { useCartStore } from '@/app/store/cart-store'

import { Button } from '@/app/components/ui/button'
import { FaTrashCan } from 'react-icons/fa6'

import type { ProductCart } from '@/types/user/product-cart.types'

function ProductCartItem (
  { productCart, authId }: { productCart: ProductCart, authId: string }
): React.ReactElement {
  const price = productCart.product.options[productCart.optionSelectedIndex].price

  const handleDelete = async (): Promise<void> => {
    useCartStore.getState().removeProduct(
      productCart.product.id,
      productCart.optionSelectedIndex
    )

    await removeProductFromCart(
      authId,
      productCart.product.id,
      productCart.optionSelectedIndex
    )
  }

  return (
    <div className='flex gap-2'>
      <div className='w-20 h-20'>
        <img
          src={productCart.product.images[0]}
          alt={productCart.product.name}
          className='w-full h-full object-cover'
        />
      </div>

      <div className='flex items-start w-full text-text-200'>
        <div className='flex flex-col w-full'>
          <p className='font-medium'>{productCart.product.name}</p>
          <p className='text-sm text-muted-foreground text-nowrap'>
            Option: {productCart.product.options[productCart.optionSelectedIndex].name}
          </p>
          <p className='text-sm text-muted-foreground text-nowrap'>
            Quantity: {productCart.quantity}
          </p>
          <p className='text-nowrap mt-1'>
            $ {(price * productCart.quantity).toLocaleString()}
          </p>
        </div>

        <Button
          variant='destructive'
          className='w-fit ml-2'
          size='sm'
          onClick={handleDelete}
        >

          <FaTrashCan />
        </Button>
      </div>
    </div>
  )
}

export default ProductCartItem
