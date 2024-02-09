import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/app/components/ui/carousel'
import BrandCardSkeleton from './Brand-card'

function BrandCarouselSkeleton (): React.ReactElement {
  return (
    <section className='px-5 sm:px-10 md:px-20 lg:px-40'>
      <h2 className='text-3xl font-bold mb-2'>Brands</h2>

      <Carousel opts={{ align: 'start', loop: true }}>
        <CarouselContent>
          {Array(10).fill(0).map((_, index) => (
            <CarouselItem key={index} className='basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6'>
              <BrandCardSkeleton />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}

export default BrandCarouselSkeleton
