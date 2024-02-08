import { useEffect, useState } from 'react'

import type { User } from '@/types/user/user.types'
import { getUserById } from '../lib/api/user/user'

const useUserData = (authId: string | undefined): {
  user: User | null
  refetchUser: () => Promise<void>
} => {
  const [user, setUser] = useState<User | null>(null)

  const fetchUser = async (): Promise<void> => {
    if (authId === undefined) return

    const user = await getUserById(authId)
    setUser(user)
  }

  useEffect(() => {
    void fetchUser()
  }, [authId])

  return {
    user,
    refetchUser: fetchUser
  }
}

export default useUserData
