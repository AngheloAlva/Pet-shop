/* eslint-disable @typescript-eslint/no-misused-promises */

import { removeProductFromCart, updateProductQuantity } from '@/app/lib/api/shop/cart'
import { calculateDiscount } from '@/app/helpers/calculateDiscount'
import { useCartStore } from '@/app/store/cart-store'
import Link from 'next/link'

import { Button } from '@/app/components/ui/button'
import { FaMinus, FaPlus, FaTrashCan } from 'react-icons/fa6'

import type { ProductCart } from '@/types/user/product-cart.types'

function ProductCartItem (
  { productCart, authId, children }: { productCart: ProductCart, authId: string, children?: React.ReactElement }
): React.ReactElement {
  const price = productCart.product.options[productCart.optionSelectedIndex].price
  const priceWithDiscount = calculateDiscount(
    price,
    productCart.product.options[productCart.optionSelectedIndex].discount
  )

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

  const handleAdd = async (): Promise<void> => {
    const productStock = productCart.product.options[productCart.optionSelectedIndex].stock
    if (productStock <= productCart.quantity) {
      return
    }

    useCartStore.getState().increaseQuantity(
      productCart.product.id,
      productCart.optionSelectedIndex
    )

    try {
      await updateProductQuantity(
        authId,
        productCart.product.id,
        productCart.quantity + 1,
        productCart.optionSelectedIndex
      )
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubtract = async (): Promise<void> => {
    useCartStore.getState().decreaseQuantity(
      productCart.product.id,
      productCart.optionSelectedIndex
    )

    if (productCart.quantity > 1) {
      try {
        await updateProductQuantity(
          authId,
          productCart.product.id,
          productCart.quantity - 1,
          productCart.optionSelectedIndex
        )
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className='flex gap-2'>
      <Link href={`/products/${productCart.product.slug}`} className='w-20 h-20'>
        <img
          src={productCart.product.images[0]}
          alt={productCart.product.name}
          className='w-full h-full object-cover rounded-lg'
        />
      </Link>

      <div className='flex items-start w-full text-text-200'>
        <div className='flex flex-col w-full'>
          <Link href={`/products/${productCart.product.slug}`} className='font-medium'>{productCart.product.name} </Link>
          <p className='text-sm text-muted-foreground text-nowrap'>
            Option: {productCart.product.options[productCart.optionSelectedIndex].name}
          </p>
          <p className='text-sm text-muted-foreground text-nowrap'>
            Quantity: {productCart.quantity}
          </p>
          <p className='text-nowrap mt-1'>
            {
              productCart.product.options[productCart.optionSelectedIndex].discount > 0
                ? (<>
                  <span className='line-through text-sm text-muted-foreground'>
                    ${productCart.product.options[productCart.optionSelectedIndex].price.toLocaleString()}
                  </span>
                  <span className='ml-2'>
                    ${priceWithDiscount.toLocaleString()}
                  </span>
                </>)
                : '$' + (price * productCart.quantity).toLocaleString()
            }
          </p>
        </div>

        <div className='w-full flex flex-col justify-between items-end h-full'>
          <Button
            variant='destructive'
            className='w-fit'
            size='sm'
            onClick={handleDelete}
          >
            <FaTrashCan />
          </Button>

          <div className='flex gap-1 text-text-200'>
            <Button size={'sm'} variant={'outline'} onClick={handleSubtract}>
              <FaMinus />
            </Button>
            <Button size={'sm'} variant={'outline'} className='text-text-200 hover:bg-white cursor-default'>
              {productCart.quantity}
            </Button>
            <Button size={'sm'} variant={'outline'} onClick={handleAdd}>
              <FaPlus />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCartItem
