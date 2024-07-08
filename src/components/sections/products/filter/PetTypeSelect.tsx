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
import type { PetType } from "@prisma/client"

export default function PetTypeSelect({
	setFilters,
	filters,
	className,
}: FilterProps): React.ReactElement {
	const petTypes = [
		{ value: "DOG", label: "Dogs" },
		{ value: "CAT", label: "Cats" },
		{ value: "BIRD", label: "Birds" },
		{ value: "FISH", label: "Fish" },
		{ value: "REPTILE", label: "Reptiles" },
		{ value: "SMALL_ANIMAL", label: "Small Animals" },
	]

	const handlePetTypeChange = (value: PetType): void => {
		setFilters({
			...filters,
			petType: value,
		})
	}

	const clearPetType = (): void => {
		setFilters({
			...filters,
			petType: undefined,
		})
	}

	return (
		<div>
			<Label>Pet Type</Label>
			<div className={cn("flex items-center justify-between gap-2", className)}>
				<Select onValueChange={handlePetTypeChange} defaultValue={filters.petType || ""}>
					<SelectTrigger>
						<SelectValue placeholder="Select a Pet Type" />
					</SelectTrigger>
					<SelectContent>
						{petTypes.map((petType) => (
							<SelectItem key={petType.value} value={petType.value}>
								{petType.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>

				<Button onClick={clearPetType} variant="secondary" className="w-1/4 lg:w-1/2">
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
