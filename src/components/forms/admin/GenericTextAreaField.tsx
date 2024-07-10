import { Textarea } from "../../ui/textarea"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form"

interface GenericTextAreaFieldProps {
	control: any
	name: string
	label: string
	placeholder: string
}

export default function GenericTextAreaField({
	control,
	label,
	name,
	placeholder,
}: GenericTextAreaFieldProps): React.ReactElement {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Textarea placeholder={placeholder} {...field} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
