import type { Product } from '@/types/shop/products.types'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getProductBySlug } from '../../lib/api/shop/product'

const useProductBySlug = (
  slug: string
): { product: Product, isLoading: boolean } => {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const [product, setProduct] = useState<Product>({} as Product)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchProduct = async (): Promise<void> => {
      try {
        const data = await getProductBySlug(slug)
        setProduct(data)
      } catch (error) {
        router.push('/404')
      } finally {
        setIsLoading(false)
      }
    }

    void fetchProduct()
  }, [])

  return {
    product,
    isLoading
  }
}

export default useProductBySlug
