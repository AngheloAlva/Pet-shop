import { useCategories } from "@/hooks"

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui"

import type { Control } from "react-hook-form"

export default function CategorySelectField({
	control,
}: {
	control: Control<any>
}): React.ReactElement {
	const { categories } = useCategories({
		isAvailable: true,
		limit: 100,
		page: 1,
	})

	return (
		<FormField
			control={control}
			name="categoryId"
			render={({ field }) => (
				<FormItem>
					<FormLabel>Category</FormLabel>
					<Select onValueChange={field.onChange} defaultValue={field.value}>
						<FormControl>
							<SelectTrigger>
								<SelectValue placeholder="Select a category" />
							</SelectTrigger>
						</FormControl>
						<SelectContent>
							{categories.map((category) => (
								<SelectItem key={category.id} value={category.id.toString()}>
									{category.name}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</FormItem>
			)}
		/>
	)
}
