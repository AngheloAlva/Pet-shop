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

export default function LifeStageSelectField({
	control,
}: {
	control: Control<any>
}): React.ReactElement {
	const lifeStages = ["PUPPY", "ADULT", "SENIOR", "KITTEN", "ALL_LIFE_STAGES"]

	return (
		<FormField
			control={control}
			name="lifeStage"
			render={({ field }) => (
				<FormItem>
					<FormLabel>Life Stage</FormLabel>
					<Select onValueChange={field.onChange} defaultValue={field.value}>
						<FormControl>
							<SelectTrigger>
								<SelectValue placeholder="Select a life stage" />
							</SelectTrigger>
						</FormControl>
						<SelectContent>
							{lifeStages.map((lifeStage) => (
								<SelectItem key={lifeStage} value={lifeStage.toString()}>
									{lifeStage}
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
