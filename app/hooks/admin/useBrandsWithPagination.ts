import { useToast } from '../../components/ui/use-toast'
import { getBrands } from '../../lib/api/shop/brand'
import { useEffect, useState } from 'react'

import type { GetAllOfModel } from '@/types/shared/getAllOfModel'
import type { Brand } from '@/types/shop/brand.types'

interface UseBrandsWithPaginationResponse {
  page: number
  total: number
  brands: Brand[]
  isLoading: boolean
  refresh: () => Promise<void>
  setPage: (page: number) => void
}

const useBrandsWithPagination = ({
  isAvailable, limit
}: GetAllOfModel): UseBrandsWithPaginationResponse => {
  const [brands, setBrands] = useState<Brand[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [total, setTotal] = useState<number>(0)
  const [page, setPage] = useState<number>(1)
  const { toast } = useToast()

  const fetchBrands = async (): Promise<void> => {
    try {
      const brands = await getBrands({ isAvailable, limit, page })
      setBrands(brands.brands)
      setTotal(brands.total)
      setIsLoading(false)
    } catch (error) {
      toast({
        title: 'Error getting brands',
        description: (error as any).response?.data
      })
    }
  }

  useEffect(() => {
    void fetchBrands()
  }, [limit, page])

  return {
    page,
    total,
    brands,
    setPage,
    isLoading,
    refresh: fetchBrands
  }
}

export default useBrandsWithPagination
