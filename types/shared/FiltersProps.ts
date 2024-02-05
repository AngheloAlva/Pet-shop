import type { GetProductsWithFilters } from './getProductsWithFilters'

interface FilterProps {
  setFilters: (filters: GetProductsWithFilters) => void
  filters: GetProductsWithFilters
  className?: string
}

export {
  type FilterProps
}
