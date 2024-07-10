import { petTypes } from "@/lib"

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
	FormMessage,
} from "@/components/ui"

import type { Control } from "react-hook-form"

export default function PetTypeSelectField({
	control,
}: {
	control: Control<any>
}): React.ReactElement {
	return (
		<FormField
			control={control}
			name="petType"
			render={({ field }) => (
				<FormItem>
					<FormLabel>PetType</FormLabel>
					<Select onValueChange={field.onChange} defaultValue={field.value}>
						<FormControl>
							<SelectTrigger>
								<SelectValue placeholder="Select a Pet Type" />
							</SelectTrigger>
						</FormControl>
						<SelectContent>
							{petTypes.map((petType) => (
								<SelectItem key={petType} value={petType}>
									{petType}
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
