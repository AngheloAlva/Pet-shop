import {
	BannerSection,
	BrandsSection,
	PetsSection,
	ProductsByBrandSection,
	ProductsSection,
} from "@/components/sections"

export default function HomePage() {
	return (
		<main className="flex flex-col gap-10 pb-20 pt-16 md:pt-28">
			<BannerSection />
			<ProductsSection />
			<PetsSection />
			<ProductsByBrandSection />
			<BrandsSection />
		</main>
	)
}
