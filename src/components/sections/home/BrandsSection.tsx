import { getBrands } from "@/actions"

import { BrandCard, Carousel, CarouselContent, CarouselItem } from "@/components/ui"

async function BrandsSection(): Promise<React.ReactElement> {
	const { brands } = await getBrands({
		isAvailable: true,
		limit: 100,
		page: 1,
	})

	return (
		<section className="px-5 sm:px-10 md:px-20 lg:px-40">
			<h2 className="mb-2 text-3xl font-bold">Brands</h2>

			<Carousel opts={{ align: "start", loop: true }}>
				<CarouselContent>
					{brands &&
						brands.map((brand) => (
							<CarouselItem
								key={brand.id}
								className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6"
							>
								<BrandCard brand={brand} />
							</CarouselItem>
						))}
				</CarouselContent>
			</Carousel>
		</section>
	)
}

export default BrandsSection
