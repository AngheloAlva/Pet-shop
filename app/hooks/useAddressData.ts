import { getUserById } from '../lib/api/user/user'
import { useEffect, useState } from 'react'

import type { User } from '@/types/user/user.types'

interface UseAddressDataResponse {
  user: User | null
  isLoading: boolean
  refetchUser: () => Promise<void>
}

const useAddressData = (authId: string): UseAddressDataResponse => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [user, setUser] = useState<User | null>(null)

  const fetchUser = async (): Promise<void> => {
    setIsLoading(true)

    try {
      if (authId === null) return

      const user = await getUserById(authId)
      setUser(user)
    } catch (error) {
      console.log('Error fetching user', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    void fetchUser()
  }, [authId])

  return {
    user,
    isLoading,
    refetchUser: fetchUser
  }
}

export default useAddressData
