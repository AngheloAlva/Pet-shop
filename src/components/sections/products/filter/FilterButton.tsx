"use client"

import { useFilterStore } from "@/store"

import LifeStageSelect from "./LifeStageSelect"
import CategorySelect from "./CategorySelect"
import PetTypeSelect from "./PetTypeSelect"
import BrandSelect from "./BrandSelect"
import {
	Sheet,
	SheetTitle,
	SheetHeader,
	SheetTrigger,
	SheetContent,
	SheetDescription,
} from "@/components/ui"

export default function FilterButton(): React.ReactElement {
	const { filters, setFilters } = useFilterStore()

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
					<CategorySelect filters={filters} setFilters={setFilters} />
					<BrandSelect filters={filters} setFilters={setFilters} />
					<LifeStageSelect filters={filters} setFilters={setFilters} />
					<PetTypeSelect filters={filters} setFilters={setFilters} />
				</div>
			</SheetContent>
		</Sheet>
	)
}
