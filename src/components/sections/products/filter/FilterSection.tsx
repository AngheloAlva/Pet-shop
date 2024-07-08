import BrandSelect from "./BrandSelect"
import { Separator } from "@/components/ui"
import PetTypeSelect from "./PetTypeSelect"
import CategorySelect from "./CategorySelect"
import LifeStageSelect from "./LifeStageSelect"

import type { GetProductsWithFilters } from "@/interfaces"

function FilterSection({ setFilters, filters }: FilterProps): React.ReactElement {
	return (
		<div className="hidden w-1/5 lg:block">
			<h2 className="text-lg font-bold">Filters</h2>
			<Separator />
			<div className="mt-2 flex flex-col gap-4">
				<CategorySelect
					setFilters={setFilters}
					filters={filters}
					className="flex-col items-start"
				/>
				<Separator />
				<BrandSelect setFilters={setFilters} filters={filters} className="flex-col items-start" />
				<Separator />
				<LifeStageSelect
					setFilters={setFilters}
					filters={filters}
					className="flex-col items-start"
				/>
				<Separator />
				<PetTypeSelect setFilters={setFilters} filters={filters} className="flex-col items-start" />
			</div>
		</div>
	)
}

export default FilterSection

interface FilterProps {
	setFilters: (filters: GetProductsWithFilters) => void
	filters: GetProductsWithFilters
	className?: string
}
