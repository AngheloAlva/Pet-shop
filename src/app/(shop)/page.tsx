import { Suspense } from "react"

import {
	PetsSection,
	BannerSection,
	BrandsSection,
	ProductsSection,
	BrandSectionSkeleton,
	ProductsByBrandSection,
	ProductsSectionSkeleton,
} from "@/components/sections"

export default function HomePage() {
	return (
		<main className="mx-auto flex max-w-[1900px] flex-col items-center justify-center gap-10 pb-20 pt-16 md:pt-28">
			<BannerSection />

			<Suspense fallback={<ProductsSectionSkeleton />}>
				<ProductsSection />
			</Suspense>

			<PetsSection />

			<Suspense fallback={<ProductsSectionSkeleton />}>
				<ProductsByBrandSection />
			</Suspense>

			<Suspense fallback={<BrandSectionSkeleton />}>
				<BrandsSection />
			</Suspense>
		</main>
	)
}
