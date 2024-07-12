import { AllProductsSectionShared } from "@/components/sections"

function CategoryBySlugPage({ params }: { params: { categorySlug: string } }): React.ReactElement {
	return (
		<main className="mx-auto flex max-w-[1900px] flex-col gap-5 px-5 pb-20 pt-28 text-text-100 sm:px-10 md:px-20 md:pt-40 lg:px-40">
			<AllProductsSectionShared
				imageFrom="category"
				filterName="categorySlug"
				filterValue={params.categorySlug}
			/>
		</main>
	)
}

export default CategoryBySlugPage
