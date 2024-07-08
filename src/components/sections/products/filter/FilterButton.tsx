import BrandSelect from "./BrandSelect"
import PetTypeSelect from "./PetTypeSelect"
import CategorySelect from "./CategorySelect"
import LifeStageSelect from "./LifeStageSelect"
import {
	Sheet,
	SheetTitle,
	SheetHeader,
	SheetTrigger,
	SheetContent,
	SheetDescription,
} from "@/components/ui"

import type { GetProductsWithFilters } from "@/interfaces"

export default function FilterButton({ setFilters, filters }: FilterProps): React.ReactElement {
	return (
		<Sheet>
			<SheetTrigger>
				<span className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-lg border border-input bg-background bg-blue-500 px-6 py-2 text-sm font-medium text-bg-100 shadow-sm transition-colors hover:bg-accent hover:bg-blue-400 hover:text-accent-foreground hover:text-bg-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
					Filter
				</span>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Filter</SheetTitle>
					<SheetDescription>Filter by category</SheetDescription>
				</SheetHeader>

				<div className="mt-8 flex flex-col gap-4">
					<CategorySelect setFilters={setFilters} filters={filters} />
					<BrandSelect setFilters={setFilters} filters={filters} />
					<LifeStageSelect setFilters={setFilters} filters={filters} />
					<PetTypeSelect setFilters={setFilters} filters={filters} />
				</div>
			</SheetContent>
		</Sheet>
	)
}

interface FilterProps {
	setFilters: (filters: GetProductsWithFilters) => void
	filters: GetProductsWithFilters
	className?: string
}
