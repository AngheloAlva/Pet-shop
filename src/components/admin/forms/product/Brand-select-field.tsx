import { useBrands } from "@/hooks"

import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui"

import type { Control } from "react-hook-form"

function BrandSelectField({ control }: { control: Control<any> }): React.ReactElement {
	const { brands } = useBrands({
		isAvailable: true,
		limit: 100,
		page: 1,
	})

	return (
		<FormField
			control={control}
			name="brandId"
			render={({ field }) => (
				<FormItem>
					<FormLabel>Brand</FormLabel>
					<Select onValueChange={field.onChange} defaultValue={field.value}>
						<FormControl>
							<SelectTrigger>
								<SelectValue placeholder="Select a brand" />
							</SelectTrigger>
						</FormControl>
						<SelectContent>
							{brands.map((brand) => (
								<SelectItem key={brand.id} value={brand.id.toString()}>
									{brand.name}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}

export default BrandSelectField
