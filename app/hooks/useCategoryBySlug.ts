import { getCategoryBySlug } from '../lib/api/shop/category'
import { useEffect, useState } from 'react'

import type { Category } from '@/types/shop/category.types'

const useCategoryBySlug = (
  slug: string
): { category: Category | null, isLoading: boolean } => {
  const [category, setCategory] = useState<Category | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCategory = async (): Promise<void> => {
      const category = await getCategoryBySlug(slug)
      setCategory(category)
      setIsLoading(false)
    }

    void fetchCategory()
  }, [])

  return {
    category,
    isLoading
  }
}

export default useCategoryBySlug
