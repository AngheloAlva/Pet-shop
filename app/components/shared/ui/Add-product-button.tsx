/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import { addProductToCart } from '@/app/lib/api/shop/cart'
import { SignInButton, useUser } from '@clerk/nextjs'

import { useToast } from '../../ui/use-toast'
import { ToastAction } from '../../ui/toast'
import { Button } from '../../ui/button'
import { cn } from '@/app/lib/utils'

interface AddProductButtonProps {
  quantity: number
  productId: number
  className?: string
  optionSelectedIndex: number
}

function AddProductButton ({
  optionSelectedIndex, productId, quantity, className
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
          <SignInButton afterSignInUrl={`/products/${productId}`}>
            <ToastAction altText='Sign in' className='hover:text-text-100'>
                Sign in
            </ToastAction>
          </SignInButton>
      })
      return
    }

    try {
      await addProductToCart({
        optionSelectedIndex,
        authId: user?.id ?? '',
        productId,
        quantity
      })
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
      onClick={async () => {
        await handleAddToCart()
      }}
    >
      Add to cart
    </Button>
  )
}

export default AddProductButton
