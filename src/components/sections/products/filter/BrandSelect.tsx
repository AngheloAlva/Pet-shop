"use client"

import {
	Select,
	SelectItem,
	SelectValue,
	SelectTrigger,
	SelectContent,
	Label,
	Button,
} from "@/components/ui"
import { useBrands } from "@/hooks"
import { GetProductsWithFilters } from "@/interfaces"
import { cn } from "@/lib"

export function BrandSelect({ setFilters, filters, className }: FilterProps): React.ReactElement {
	const { brands } = useBrands({
		isAvailable: true,
		limit: 100,
		page: 1,
	})

	const handleBrandChange = (value: string): void => {
		setFilters({
			...filters,
			brandSlug: value,
		})
	}

	const clearBrand = (): void => {
		setFilters({
			...filters,
			brandSlug: undefined,
		})
	}

	return (
		<div>
			<Label>Brand</Label>
			<div className={cn("flex items-center justify-between gap-2", className)}>
				<Select onValueChange={handleBrandChange} defaultValue={filters.brandSlug}>
					<SelectTrigger>
						<SelectValue placeholder="Select a brand" />
					</SelectTrigger>
					<SelectContent>
						{brands.map((brand) => (
							<SelectItem key={brand.id} value={brand.slug}>
								{brand.name}
							</SelectItem>
						))}
					</SelectContent>
				</Select>

				<Button onClick={clearBrand} variant="secondary" className="w-1/4 lg:w-1/2">
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
