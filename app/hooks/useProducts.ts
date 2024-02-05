import { getProducts } from '../lib/api/shop/product'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import type { GetProductsWithFilters } from '@/types/shared/getProductsWithFilters'
import type { Product } from '@/types/shop/products.types'

interface UseProducts {
  limit: number
  isAvailable: boolean
  InitialFilters: GetProductsWithFilters
}

const useProducts = ({
  limit,
  isAvailable,
  InitialFilters
}: UseProducts): {
    page: number
    total: number
    products: Product[]
    isLoading: boolean
    setPage: (page: number) => void
    filters: GetProductsWithFilters
    setFilters: (filters: GetProductsWithFilters) => void
  } => {
  const [filters, setFilters] = useState<GetProductsWithFilters>(InitialFilters)
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)

  const router = useRouter()

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      try {
        const data = await getProducts({
          isAvailable,
          limit,
          page,
          ...filters
        })
        setProducts(data.products)
        setTotal(data.total)
        setIsLoading(false)
      } catch (error) {
        // router.push('/404')
        console.error(error)
      }
    }

    void fetchProducts()
  }, [isAvailable, limit, router, filters, page])

  return {
    page,
    total,
    filters,
    setPage,
    products,
    isLoading,
    setFilters
  }
}

export default useProducts
