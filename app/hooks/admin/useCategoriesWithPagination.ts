import { getCategories } from '../../lib/api/shop/category'
import { useToast } from '../../components/ui/use-toast'
import { useEffect, useState } from 'react'

import type { GetAllOfModel } from '@/types/shared/getAllOfModel'
import type { Category } from '@/types/shop/category.types'

interface UseCategoriesWithPaginationResponse {
  page: number
  total: number
  setPage: (page: number) => void
  isLoading: boolean
  categories: Category[]
  refresh: () => Promise<void>
}

const useCategoriesWithPagination = ({
  isAvailable, limit
}: GetAllOfModel): UseCategoriesWithPaginationResponse => {
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [total, setTotal] = useState<number>(0)
  const [page, setPage] = useState<number>(1)
  const { toast } = useToast()

  const fetchCategories = async (): Promise<void> => {
    try {
      const categories = await getCategories({ isAvailable, limit, page })
      setCategories(categories.categories)
      setTotal(categories.total)
      setIsLoading(false)
    } catch (error) {
      toast({
        title: 'Error getting categories',
        description: (error as any).response?.data
      })
    }
  }

  useEffect(() => {
    void fetchCategories()
  }, [limit, page])

  return {
    page,
    total,
    setPage,
    isLoading,
    categories,
    refresh: fetchCategories
  }
}

export default useCategoriesWithPagination
