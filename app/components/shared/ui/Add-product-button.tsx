/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import { addProductToCart } from '@/app/lib/api/shop/cart'
import { SignInButton, useUser } from '@clerk/nextjs'
import { useCartStore } from '@/app/store/cart-store'
import { cn } from '@/app/lib/utils'

import { useToast } from '../../ui/use-toast'
import { ToastAction } from '../../ui/toast'
import { Button } from '../../ui/button'

import type { Product } from '@/types/shop/products.types'

interface AddProductButtonProps {
  quantity: number
  product: Product
  className?: string
  optionSelectedIndex: number
}

function AddProductButton ({
  optionSelectedIndex, product, quantity, className
}: AddProductButtonProps): React.ReactElement {
  const { user, isSignedIn } = useUser()
  const { toast } = useToast()

  const handleAddToCart = async (): Promise<void> => {
    if (!(isSignedIn ?? false)) {
      toast({
        title: 'You must be signed in to add products to cart',
        description: 'Sign in or create an account to continue',
        duration: 3000,
        className: 'bg-red-400 text-bg-100',
        action:
          <SignInButton afterSignInUrl={`/products/${product.id}`}>
            <ToastAction altText='Sign in' className='hover:text-text-100'>
                Sign in
            </ToastAction>
          </SignInButton>
      })
      return
    }

    if (product.options[optionSelectedIndex].stock < quantity) {
      toast({
        title: 'Not enough stock',
        description: 'Please select a lower quantity',
        duration: 3000
      })
      return
    }

    try {
      const newProductCart = await addProductToCart({
        optionSelectedIndex,
        authId: user?.id ?? '',
        productId: product.id,
        quantity
      })

      useCartStore.getState().addProduct(newProductCart)
    } catch (error) {
      toast({
        title: 'Error adding product to cart',
        description: (error as any).response?.data.message,
        duration: 3000
      })
    }
  }

  return (
    <Button
      className={cn(className, 'h-11 w-full bg-accent-200 hover:bg-accent-300')}
      disabled={product.options[optionSelectedIndex].stock < quantity}
      onClick={async () => {
        await handleAddToCart()
      }}
    >
      Add to cart
    </Button>
  )
}

export default AddProductButton
