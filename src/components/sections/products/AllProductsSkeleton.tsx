import { Button, ProductCardSkeleton } from "@/components/ui"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6"
import FilterSection from "./filter/FilterSection"

export default function AllProductsSkeleton(): React.ReactElement {
	return (
		<>
			<div className="flex w-full gap-4">
				<FilterSection />
				<section className="grid w-full grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
					{Array.from({ length: 12 }).map((_, index) => (
						<ProductCardSkeleton key={index} />
					))}
				</section>
			</div>

			<div className="mt-5 flex w-full items-center justify-center gap-2">
				<Button disabled className="bg-blue-500 hover:bg-blue-400">
					<FaAngleLeft />
				</Button>

				{Array.from({ length: 3 }).map((_, index) => (
					<Button key={index} disabled className="bg-blue-500 hover:bg-blue-400">
						{index + 1}
					</Button>
				))}

				<Button disabled className="bg-blue-500 hover:bg-blue-400">
					<FaAngleRight />
				</Button>
			</div>
		</>
	)
}
