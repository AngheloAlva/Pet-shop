import { getBrands } from '../lib/api/shop/brand'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import type { GetAllOfModel } from '@/types/shared/getAllOfModel'
import type { Brand } from '@/types/shop/brand.types'

const useBrands = ({
  isAvailable, limit, page
}: GetAllOfModel): { brands: Brand[], isLoading: boolean } => {
  const router = useRouter()

  const [brands, setBrands] = useState<Brand[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchBrands = async (): Promise<void> => {
      try {
        const brands = await getBrands({ isAvailable, limit, page })
        setBrands(brands)
        setIsLoading(false)
      } catch (error) {
        router.push('/404')
      }
    }

    void fetchBrands()
  }, [])

  return {
    brands,
    isLoading
  }
}

export default useBrands
