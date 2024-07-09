import { getProducts } from "@/actions"

import { Carousel, CarouselItem, CarouselContent, ProductCard } from "@/components/ui"

async function ProductsSection(): Promise<React.ReactElement> {
	const { products } = await getProducts({
		isAvailable: true,
		limit: 10,
		page: 1,
	})

	return (
		<section className="w-full px-5 sm:px-10 md:px-20 lg:px-40">
			<h2 className="mb-2 text-3xl font-bold">Products</h2>

			<Carousel opts={{ align: "start", loop: true }}>
				<CarouselContent>
					{products &&
						products.map((product) => (
							<CarouselItem
								key={product.id}
								className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6"
							>
								<ProductCard product={product} />
							</CarouselItem>
						))}
				</CarouselContent>
			</Carousel>
		</section>
	)
}

export default ProductsSection
