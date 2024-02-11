import { useEffect, useState } from 'react'

import type { ProductCart } from '@/types/user/product-cart.types'
import type { User } from '@/types/user/user.types'

interface UseCartButtonValidationResponse {
  isButtonEnabled: boolean
  setIsButtonEnabled: (enabled: boolean) => void

}

const useCartButtonValidation = (user: User | null, products: ProductCart[]): UseCartButtonValidationResponse => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false)

  useEffect(() => {
    if (products.length === 0) {
      setIsButtonEnabled(false)
      return
    }

    const userValid =
      ((user?.name) != null) &&
      ((user?.lastName) != null) &&
      ((user?.rut) != null) &&
      ((user?.phone) != null)

    setIsButtonEnabled(userValid)
  }, [user])

  return {
    isButtonEnabled,
    setIsButtonEnabled
  }
}

export default useCartButtonValidation
