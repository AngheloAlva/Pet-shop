import { useEffect, useState } from 'react'
import { getCart } from '../lib/api/shop/cart'
import { useCartStore } from '../store/cart-store'

const useCart = (authId: string | undefined): { isLoading: boolean } => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchCart = async (): Promise<void> => {
      if (authId == null) {
        setIsLoading(false)
        return
      }

      try {
        const cart = await getCart(authId)
        useCartStore.setState({ products: cart.products })
      } catch (error) {
        console.error('Error fetching cart:', error)
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

export default useCart
