interface GetProductsWithFilters {
  page?: number
  limit: number
  order?: string
  search?: string
  sortBy?: string
  petType?: string
  brandId?: string
  minPrice?: string
  maxPrice?: string
  lifeStage?: string
  categorySlug?: string
  isAvailable: boolean
  isDiscounted?: boolean
}

export {
  type GetProductsWithFilters
}
