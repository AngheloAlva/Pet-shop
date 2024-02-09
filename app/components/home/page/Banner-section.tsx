import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem } from '../../ui/carousel'

function BannerSection (): React.ReactElement {
  const bannerImages = [
    {
      src: '/images/banners/banner-1.png',
      shortSrc: '/images/banners/short-banner-1.png',
      alt: 'Banner 1'
    },
    {
      src: '/images/banners/banner-2.png',
      shortSrc: '/images/banners/short-banner-2.png',
      alt: 'Banner 2'
    },
    {
      src: '/images/banners/banner-3.png',
      shortSrc: '/images/banners/short-banner-3.png',
      alt: 'Banner 3'
    }
  ]

  return (
    <Carousel opts={{ align: 'start', loop: true }}>
      <CarouselContent>
        {bannerImages.map((image, index) => (
          <CarouselItem key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              width={2370}
              height={585}
              className="hidden lg:block"
            />
            <Image
              src={image.shortSrc}
              alt={image.alt}
              width={1200}
              height={600}
              className="lg:hidden"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default BannerSection
