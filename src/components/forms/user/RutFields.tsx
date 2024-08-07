import { formatRut } from "@/helpers"

import { FormItem, FormField, FormLabel, FormControl, FormMessage, Input } from "@/components/ui"

interface FormFieldProps {
	label: string
	control: any
	name: string
	disabled?: boolean
	placeholder: string
}

export function RutField({
	label,
	control,
	name,
	placeholder,
	disabled = false,
}: FormFieldProps): React.ReactElement {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => {
				const { onChange, ...restFieldProps } = field

				return (
					<FormItem>
						<FormLabel>{label}</FormLabel>
						<FormControl>
							<Input
								onChange={(e) => {
									field.onChange(formatRut(e.target.value))
								}}
								placeholder={placeholder}
								disabled={disabled}
								{...restFieldProps}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)
			}}
		/>
	)
}
