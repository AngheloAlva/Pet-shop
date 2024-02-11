import { getCategories } from '../../lib/api/shop/category'
import { useToast } from '../../components/ui/use-toast'
import { useEffect, useState } from 'react'

import type { GetAllOfModel } from '@/types/shared/getAllOfModel'
import type { Category } from '@/types/shop/category.types'

const useCategories = ({
  isAvailable, limit, page
}: GetAllOfModel): { categories: Category[], isLoading: boolean } => {
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { toast } = useToast()

  useEffect(() => {
    const fetchCategories = async (): Promise<void> => {
      try {
        const categories = await getCategories({ isAvailable, limit, page })
        setCategories(categories.categories)
        setIsLoading(false)
      } catch (error) {
        toast({
          title: 'Error getting categories',
          description: (error as any).response?.data
        })
      }
    }

    void fetchCategories()
  }, [])

  return {
    categories,
    isLoading
  }
}

export default useCategories
