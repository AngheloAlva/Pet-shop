interface GetProductsWithFilters {
  search?: string | undefined
  petType?: string | undefined
  brandSlug?: string | undefined
  minPrice?: string | undefined
  maxPrice?: string | undefined
  lifeStage?: string | undefined
  categorySlug?: string | undefined
}

export {
  type GetProductsWithFilters
}
