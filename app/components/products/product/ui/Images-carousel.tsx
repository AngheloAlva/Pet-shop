import Image from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/app/components/ui/carousel'

interface ImagesCarouselProps {
  images: string[]
  name: string
  setImageSelected: (index: number) => void
}

function ImagesCarousel ({
  images, name, setImageSelected
}: ImagesCarouselProps): React.ReactElement {
  return (
    <Carousel opts={{ align: 'start', loop: true }} className='flex items-center justify-center gap-4'>
      <CarouselPrevious className='hidden sm:flex sm:static translate-y-0' />
      <CarouselContent className='max-w-md'>
        {
          images.map((image, index) => (
            <CarouselItem key={image} className='flex basis-1/4'>
              <Image
                src={image}
                alt={name}
                width={150}
                height={150}
                className='w-14 h-14 rounded-lg border border-input cursor-pointer sm:w-20 sm:h-20 md:w-24 md:h-24'
                onClick={() => { setImageSelected(index) }}
              />
            </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselNext className='hidden sm:flex sm:static translate-y-0' />
    </Carousel>
  )
}

export default ImagesCarousel
