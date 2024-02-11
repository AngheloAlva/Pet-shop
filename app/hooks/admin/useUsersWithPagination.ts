import { useToast } from '../../components/ui/use-toast'
import { useEffect, useState } from 'react'

import { getUsers } from '../../lib/api/user/user'
import type { User } from '@/types/user/user.types'

interface UseUsersWithPaginationResponse {
  page: number
  total: number
  users: User[]
  isLoading: boolean
  setPage: (page: number) => void
}

const useUsersWithPagination = (
  { limit, authId, isAvailable }: { limit: number, authId: string, isAvailable: boolean }
): UseUsersWithPaginationResponse => {
  const [users, setusers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [total, setTotal] = useState<number>(0)
  const [page, setPage] = useState<number>(1)
  const { toast } = useToast()

  useEffect(() => {
    const fetchBrands = async (): Promise<void> => {
      try {
        const users = await getUsers(authId, { page, limit, isAvailable })
        setusers(users.users)
        setTotal(users.total)
        setIsLoading(false)
      } catch (error) {
        toast({
          title: 'Error getting users',
          description: (error as any).response?.data
        })
      }
    }

    void fetchBrands()
  }, [limit, page])

  return {
    page,
    total,
    users,
    setPage,
    isLoading
  }
}

export default useUsersWithPagination
