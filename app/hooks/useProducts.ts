import { getProducts } from '../lib/api/shop/product'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import type { GetAllOfModel } from '@/types/shared/getAllOfModel'
import type { Product } from '@/types/shop/products.types'

const useProducts = ({
  isAvailable, limit, page
}: GetAllOfModel): { products: Product[], isLoading: boolean } => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      try {
        const data = await getProducts({ isAvailable, limit, page })
        setProducts(data)
        setIsLoading(false)
      } catch (error) {
        router.push('/404')
      }
    }

    void fetchProducts()
  }, [])

  return {
    products,
    isLoading
  }
}

export default useProducts
