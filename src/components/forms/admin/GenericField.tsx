import { Input } from "../../ui/input"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form"

interface GenericFieldProps {
	control: any
	name: string
	label: string
	placeholder: string
	type?: string
}

export default function GenericField({
	control,
	label,
	name,
	placeholder,
	type = "text",
}: GenericFieldProps): React.ReactElement {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Input type={type} min={0} placeholder={placeholder} {...field} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
