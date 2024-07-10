import ProductItemSkeleton from "./ProductItemSkeleton"
import { Skeleton } from "@/components/ui"

function ProductsSectionSkeleton(): React.ReactElement {
	return (
		<section className="w-full space-y-2">
			<div className="flex w-full items-center justify-between">
				<h2 className="text-lg font-bold">Products</h2>
				<div className="flex items-center gap-2">
					<Skeleton className="h-5 w-14" /> products
				</div>
				<Skeleton className="h-5 w-20" />
			</div>
			<div className="flex w-full gap-4">
				<section className="grid grid-cols-1 gap-x-2 gap-y-4 lg:grid-cols-2 xl:grid-cols-3">
					{Array.from({ length: 10 }).map((_, i) => (
						<ProductItemSkeleton key={i} />
					))}
				</section>
			</div>

			<div className="mt-5 flex w-full items-center justify-center gap-2">
				<Skeleton className="h-10 w-52" />
			</div>
		</section>
	)
}

export default ProductsSectionSkeleton
