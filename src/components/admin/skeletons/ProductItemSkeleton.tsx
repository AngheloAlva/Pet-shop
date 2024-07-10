import { Card, CardContent, Skeleton } from "@/components/ui"

function ProductItemSkeleton(): React.ReactElement {
	return (
		<Card className="flex items-center">
			<div className="p-2">
				<Skeleton className="h-28 w-24 rounded-lg object-contain" />
			</div>

			<CardContent className="flex flex-col p-5">
				<div>
					<Skeleton className="h-5 w-3/4" />
				</div>
				<div>
					<Skeleton className="mt-2 h-5 w-1/2" />
				</div>

				<div className="mt-2 flex flex-wrap gap-2 text-xs">
					<Skeleton className="h-5 w-20" />
					<Skeleton className="h-5 w-20" />
					<Skeleton className="h-5 w-20" />
				</div>
			</CardContent>
		</Card>
	)
}

export default ProductItemSkeleton
