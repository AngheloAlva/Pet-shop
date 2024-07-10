import {
	Card,
	Skeleton,
	CardTitle,
	CardHeader,
	CardContent,
	CardDescription,
} from "@/components/ui"

function GenericInfoSkeleton(): React.ReactElement {
	return (
		<Card className="flex items-center justify-between">
			<CardHeader>
				<CardTitle>
					<Skeleton className="h-8 w-20" />
				</CardTitle>
				<CardDescription>
					<Skeleton className="h-5 w-36" />
				</CardDescription>
			</CardHeader>
			<CardContent className="p-6 text-4xl font-semibold">
				<Skeleton className="h-10 w-20" />
			</CardContent>
		</Card>
	)
}

export default GenericInfoSkeleton
