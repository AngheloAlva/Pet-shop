"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui"
import AutoPlay from "embla-carousel-autoplay"
import Image from "next/image"

function BannerSection(): React.ReactElement {
	const bannerImages = [
		{
			src: "/banners/banner-1.png",
			shortSrc: "/banners/short-banner-1.png",
			alt: "Banner 1",
		},
		{
			src: "/banners/banner-2.png",
			shortSrc: "/banners/short-banner-2.png",
			alt: "Banner 2",
		},
		{
			src: "/banners/banner-3.png",
			shortSrc: "/banners/short-banner-3.png",
			alt: "Banner 3",
		},
	]

	return (
		<Carousel
			opts={{
				align: "start",
				loop: true,
			}}
			plugins={[
				AutoPlay({
					delay: 3000,
				}),
			]}
		>
			<CarouselContent>
				{bannerImages.map((image, index) => (
					<CarouselItem key={index}>
						<Image
							priority
							src={image.src}
							alt={image.alt}
							width={2173}
							height={536}
							className="hidden lg:block"
						/>
						<Image
							priority
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
