import { useEffect, useState } from 'react'

import type { User } from '@/types/user/user.types'
import { useRouter } from 'next/navigation'

const useShippingButton = (userDb: User | null): {
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
