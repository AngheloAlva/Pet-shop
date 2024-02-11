import { getProducts } from '@/app/lib/api/shop/product'

import ProductCard from '../../shared/ui/Product-card'
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/app/components/ui/carousel'

async function ProductsByBrandSection (): Promise<React.ReactElement> {
  const products = await getProducts({
    brandSlug: 'acana',
    isAvailable: true,
    limit: 10,
    page: 1
  })

  return (
    <section className='px-5 sm:px-10 md:px-20 lg:px-40'>
      <h2 className='text-3xl font-bold mb-2'>Acana Products</h2>

      <Carousel opts={{ align: 'start', loop: true }}>
        <CarouselContent>
          {products.products.map((product) => (
            <CarouselItem key={product.id} className='xs:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6'>
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}

export default ProductsByBrandSection
