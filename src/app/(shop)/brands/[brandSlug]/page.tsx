import { AllProductsSectionShared } from "@/components/sections"

function BrandBySlugPage({ params }: { params: { brandSlug: string } }): React.ReactElement {
	return (
		<main className="mx-auto flex max-w-[1900px] flex-col gap-5 px-5 pb-20 pt-24 text-text-100 sm:px-10 md:px-20 md:pt-40">
			<AllProductsSectionShared
				imageFrom="brand"
				filterName="brandSlug"
				filterValue={params.brandSlug}
			/>
		</main>
	)
}

export default BrandBySlugPage
