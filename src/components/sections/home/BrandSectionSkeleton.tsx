import { Carousel, CarouselContent, CarouselItem, Skeleton } from "@/components/ui"

export default function BrandSectionSkeleton(): React.ReactElement {
	return (
		<section className="px-5 sm:px-10 md:px-20 lg:px-40">
			<h2 className="mb-2 text-3xl font-bold">Brands</h2>

			<Carousel opts={{ align: "start", loop: true }}>
				<CarouselContent>
					{Array(10)
						.fill(0)
						.map((_, index) => (
							<CarouselItem
								key={index}
								className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6"
							>
								<Skeleton className="h-24 w-full" />
							</CarouselItem>
						))}
				</CarouselContent>
			</Carousel>
		</section>
	)
}
