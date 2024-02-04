import { getProducts } from '../lib/api/shop/product'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import type { Product } from '@/types/shop/products.types'
import type { GetProductsWithFilters } from '@/types/shared/getProductsWithFilters'

const useProducts = ({
  limit,
  order,
  sortBy,
  search,
  petType,
  brandId,
  maxPrice,
  minPrice,
  lifeStage,
  categorySlug,
  isAvailable,
  isDiscounted
}: GetProductsWithFilters): {
    page: number
    total: number
    products: Product[]
    isLoading: boolean
    setPage: (page: number) => void
  } => {
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
          order,
          sortBy,
          search,
          petType,
          brandId,
          maxPrice,
          minPrice,
          lifeStage,
          categorySlug,
          isDiscounted
        })
        setProducts(data.products)
        setTotal(data.total)
        setIsLoading(false)
      } catch (error) {
        router.push('/404')
      }
    }

    void fetchProducts()
  }, [page, search, petType, brandId, maxPrice, minPrice, lifeStage, categorySlug, isAvailable, isDiscounted, limit, order, sortBy, router])

  return {
    page,
    total,
    setPage,
    products,
    isLoading
  }
}

export default useProducts
