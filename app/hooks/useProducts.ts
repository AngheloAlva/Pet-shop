import type { GetAllOfModel } from '@/types/shared/getAllOfModel'
import type { Product } from '@/types/shop/products.types'
import { useEffect, useState } from 'react'
import { getProducts } from '../lib/api/shop/product'

const useProducts = ({
  isAvailable, limit, page
}: GetAllOfModel): { products: Product[], isLoading: boolean } => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      const data = await getProducts({ isAvailable, limit, page })
      setProducts(data)
      setIsLoading(false)
    }

    void fetchProducts()
  }, [])

  return {
    products,
    isLoading
  }
}

export default useProducts
