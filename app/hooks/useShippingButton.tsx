import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import type { User } from '@/types/user/user.types'
import type { ProductCart } from '@/types/user/product-cart.types'

const useShippingButton = (userDb: User | null, products: ProductCart[]): {
  isButtonEnabled: boolean
  setIsButtonEnabled: (value: boolean) => void
} => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (userDb === null) return

    if (userDb?.name === null || userDb?.lastName === null || userDb?.rut === null || userDb?.phone === null) {
      router.push('/checkout')
    }

    if (products.length === 0) {
      setIsButtonEnabled(false)
      return
    }

    if (userDb.address !== undefined && userDb?.address?.length >= 1) {
      setIsButtonEnabled(true)
    }
  }, [userDb])

  return {
    isButtonEnabled,
    setIsButtonEnabled
  }
}

export default useShippingButton
