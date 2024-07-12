import { Button, Skeleton } from "@/components/ui"
import { FaMinus, FaPlus } from "react-icons/fa6"

export default function ProductDataSkeleton(): React.ReactElement {
	return (
		<>
			<div className="flex flex-col gap-10 md:flex-row">
				<section className="flex w-full flex-col items-center gap-4 md:w-auto lg:w-2/5">
					<div className="w-full max-w-md overflow-hidden rounded-lg border border-input bg-white p-7 xl:max-w-lg">
						<Skeleton className="h-full min-h-96 w-full" />
					</div>
					<div className="flex items-center gap-3">
						<Skeleton className="h-14 w-14 rounded-lg border border-input sm:h-20 sm:w-20 md:h-24 md:w-24" />
						<Skeleton className="h-14 w-14 rounded-lg border border-input sm:h-20 sm:w-20 md:h-24 md:w-24" />
						<Skeleton className="h-14 w-14 rounded-lg border border-input sm:h-20 sm:w-20 md:h-24 md:w-24" />
					</div>
				</section>
				<section className="flex flex-col gap-2 text-text-100 md:w-1/2 lg:pt-10 xl:w-2/3">
					<Skeleton className="h-14 w-full" />
					<p className="w-fit">
						<Skeleton className="h-8 w-16 bg-cream-700" />
					</p>

					<Skeleton className="h-24 w-full" />

					<span className="mt-4 flex items-center gap-1 space-x-2 text-2xl font-semibold">
						$<Skeleton className="h-10 w-32" />
					</span>

					<div className="my-4">
						<div className="flex flex-wrap gap-2">
							<Skeleton className="h-9 w-16" />
							<Skeleton className="h-9 w-16" />
						</div>
					</div>

					<div className="flex w-full items-center gap-2">
						<Button variant={"outline"} className="min-h-11 min-w-11">
							<FaMinus className="text-text-200" />
						</Button>
						<Button
							variant={"outline"}
							className="min-h-11 min-w-11 cursor-default text-text-200 hover:bg-white"
						>
							1
						</Button>
						<Button variant={"outline"} className="min-h-11 min-w-11">
							<FaPlus className="text-text-200" />
						</Button>

						<Button className={"h-11 w-full bg-green-600 hover:bg-green-500"}>Add to cart</Button>
					</div>
				</section>
			</div>

			<section className="flex flex-col gap-4 text-text-100 lg:pt-10">
				<h2 className="text-xl font-bold">Description</h2>
				<div className="flex flex-col gap-2">
					<h3 className="text-md font-bold">
						<Skeleton className="h-6 w-20" />
					</h3>
					<div className="space-y-1 text-sm">
						<Skeleton className="h-24 w-full" />
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<h3 className="text-md font-bold">
						<Skeleton className="h-6 w-20" />
					</h3>
					<div className="space-y-1 text-sm">
						<Skeleton className="h-24 w-full" />
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<h3 className="text-md font-bold">
						<Skeleton className="h-6 w-20" />
					</h3>
					<div className="space-y-1 text-sm">
						<Skeleton className="h-24 w-full" />
					</div>
				</div>
			</section>
		</>
	)
}
