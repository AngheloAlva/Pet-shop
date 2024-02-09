import PaginationButtons from '@/app/components/shared/ui/Pagination-buttons'
import FilterSection from '@/app/components/shared/filter/Filter-section'
import FilterButton from '@/app/components/shared/filter/Filter-button'
import ProductCard from '@/app/components/shared/ui/Product-card'

import type { GetProductsWithFilters } from '@/types/shared/getProductsWithFilters'
import type { Product } from '@/types/shop/products.types'

interface ProductsSectionProps {
  products: Product[]
  total: number
  filters: GetProductsWithFilters
  setFilters: (filters: GetProductsWithFilters) => void
  setPage: (page: number) => void
  page: number
  limit: number
}

function ProductsSection ({
  filters, limit, page, products, setFilters, setPage, total
}: ProductsSectionProps): React.ReactElement {
  return (
    <main className='flex flex-col gap-5 pt-5 pb-20 px-5 sm:px-10 md:px-20 text-text-100'>
      <section className='flex flex-col'>
        <div className='max-w-xl'>
          <h1 className='text-xl font-bold text-nowrap'>All Products</h1>
          <p className='text-muted-foreground'>{total} products</p>
        </div>
        <div className='w-full flex items-center justify-end lg:hidden'>
          <FilterButton setFilters={setFilters} filters={filters} />
        </div>
      </section>

      <div className='flex gap-4'>
        <FilterSection setFilters={setFilters} filters={filters} />
        <section className='grid grid-cols-1 xs:grid-cols-2 gap-x-2 gap-y-4 md:grid-cols-3 xl:grid-cols-4'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </div>

      <div className='w-full flex items-center justify-center gap-2 mt-5'>
        <PaginationButtons
          setPage={setPage}
          limit={limit}
          total={total}
          page={page}
        />
      </div>
    </main>
  )
}

export default ProductsSection
