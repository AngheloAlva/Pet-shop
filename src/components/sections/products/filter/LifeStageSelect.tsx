import { LifeStage } from "@prisma/client"
import { cn } from "@/lib"

import {
	Button,
	Label,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui"
import type { GetProductsWithFilters } from "@/interfaces"

export default function LifeStageSelect({
	setFilters,
	filters,
	className,
}: FilterProps): React.ReactElement {
	const lifeStages = [
		{ value: "PUPPY", label: "Puppy" },
		{ value: "ADULT", label: "Adult" },
		{ value: "SENIOR", label: "Senior" },
		{ value: "KITTEN", label: "Kitten" },
		{ value: "ALL_LIFE_STAGES", label: "All Life Stages" },
	]

	const handleLifeStageChange = (value: LifeStage): void => {
		setFilters({
			...filters,
			lifeStage: value,
		})
	}

	const clearLifeStage = (): void => {
		setFilters({
			...filters,
			lifeStage: undefined,
		})
	}

	return (
		<div>
			<Label>Life Stage</Label>
			<div className={cn("flex items-center justify-between gap-2", className)}>
				<Select onValueChange={handleLifeStageChange} defaultValue={filters.lifeStage || ""}>
					<SelectTrigger>
						<SelectValue placeholder="Select a Life Stage" />
					</SelectTrigger>
					<SelectContent>
						{lifeStages.map((lifeStage) => (
							<SelectItem key={lifeStage.value} value={lifeStage.value}>
								{lifeStage.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>

				<Button onClick={clearLifeStage} variant="secondary" className="w-1/4 lg:w-1/2">
					Clear
				</Button>
			</div>
		</div>
	)
}

interface FilterProps {
	setFilters: (filters: GetProductsWithFilters) => void
	filters: GetProductsWithFilters
	className?: string
}
