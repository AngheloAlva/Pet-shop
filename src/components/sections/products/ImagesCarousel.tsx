import Image from "next/image"

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui"

interface ImagesCarouselProps {
	images: string[]
	name: string
	setImageSelected: (index: number) => void
}

function ImagesCarousel({
	images,
	name,
	setImageSelected,
}: ImagesCarouselProps): React.ReactElement {
	return (
		<Carousel
			opts={{ align: "start", loop: true }}
			className="flex items-center justify-center gap-4"
		>
			<CarouselPrevious className="hidden translate-y-0 sm:static sm:flex" />
			<CarouselContent className="max-w-md">
				{images.map((image, index) => (
					<CarouselItem key={image} className="basis-auto">
						<Image
							src={image}
							alt={name}
							width={150}
							height={150}
							className="h-14 w-14 cursor-pointer rounded-lg border border-input sm:h-20 sm:w-20 md:h-24 md:w-24"
							onClick={() => {
								setImageSelected(index)
							}}
						/>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselNext className="hidden translate-y-0 sm:static sm:flex" />
		</Carousel>
	)
}

export default ImagesCarousel
