import type { User } from '@/types/user/user.types'
import { useEffect, useState } from 'react'

interface UseCartButtonValidationResponse {
  isButtonEnabled: boolean
  setIsButtonEnabled: (enabled: boolean) => void

}

const useCartButtonValidation = (user: User | null): UseCartButtonValidationResponse => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false)

  useEffect(() => {
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
