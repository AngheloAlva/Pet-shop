import { useEffect, useState } from 'react'

import { getCartInCheckout } from '../lib/api/shop/cart'
import { useToast } from '../components/ui/use-toast'
import { useCartStore } from '../store/cart-store'

interface CheckoutCartResponse {
  isLoading: boolean
}

const useCheckoutCart = (authId: string | undefined): CheckoutCartResponse => {
  const updateCartState = useCartStore((state) => state.updateCartState)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { toast } = useToast()

  useEffect(() => {
    const fetchCart = async (): Promise<void> => {
      if (authId == null) return

      try {
        const cart = await getCartInCheckout(authId)

        if (cart.optionChanged) {
          toast({
            title: 'Some products have changed',
            description: 'Some products have changed, we have updated your cart for you. Sorry for the inconvenience.',
            variant: 'destructive',
            duration: 3000
          })
        }

        if (cart.stockChanged) {
          toast({
            title: 'Some products are out of stock',
            description: 'Some products are out of stock, we have updated your cart for you. Sorry for the inconvenience.',
            variant: 'destructive',
            duration: 3000
          })
        }

        updateCartState(cart.cart.products)
      } catch (error) {
        toast({
          title: 'Error',
          description: 'An error occurred while fetching your cart, please try again later.',
          duration: 3000,
          variant: 'destructive'
        })
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    void fetchCart()
  }, [authId])

  return {
    isLoading
  }
}

export default useCheckoutCart
