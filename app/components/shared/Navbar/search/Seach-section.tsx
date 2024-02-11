'use client'

import { useDebouncedCallback } from 'use-debounce'
import useProducts from '@/app/hooks/shop/useProducts'

import ProductSearchItem from './Product-seach-item'
import { Input } from '../../../ui/input'

import type { Product } from '@/types/shop/products.types'

function SearchSection (): React.ReactElement {
  const { products, setFilters, isLoading } = useProducts({
    limit: 5,
    isAvailable: true,
    InitialFilters: {}
  })

  const searchProducts = useDebouncedCallback((search: string) => {
    setFilters({ search })
  }, 300)

  return (
    <div>
      <Input
        placeholder='Search...'
        className='mb-4'
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onChange={(e) => searchProducts(e.target.value)}
      />

      <div className='flex flex-col gap-3 overflow-y-scroll max-h-96'>
        {
          isLoading
            ? <div>Loading...</div>
            : products.map((product: Product) => (
              <ProductSearchItem product={product} key={product.id} />
            ))
        }
      </div>
    </div>
  )
}

export default SearchSection
