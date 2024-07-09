import { AllProductsSection, FilterButton } from "@/components/sections"
import { Suspense } from "react"

export default function ProductPage(): React.ReactElement {
	return (
		<main className="mx-auto flex max-w-[1900px] flex-col gap-5 px-5 pb-20 pt-28 text-text-100 sm:px-10 md:px-20 md:pt-40">
			<section className="flex flex-col">
				<div className="max-w-xl">
					<h1 className="text-nowrap text-xl font-bold">All Products</h1>
					{/* <p className="text-muted-foreground">{total} products</p> */}
				</div>
				<div className="flex w-full items-center justify-end lg:hidden">
					<FilterButton />
				</div>
			</section>

			<Suspense fallback={<div>Loading...</div>}>
				<AllProductsSection />
			</Suspense>
		</main>
	)
}
