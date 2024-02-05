import type { GetProductsWithFilters } from './getProductsWithFilters'

interface FilterProps {
  setFilters: (filters: GetProductsWithFilters) => void
  filters: GetProductsWithFilters
}

export {
  type FilterProps
}
