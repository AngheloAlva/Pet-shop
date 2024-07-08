import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Checkbox, Input } from "../ui"

interface IsApartmentFieldsProps {
	form: any
}

function IsApartmentFields({ form }: IsApartmentFieldsProps): React.ReactElement {
	const isApartment = form.watch("isApartment")

	return (
		<>
			<FormField
				control={form.control}
				name="isApartment"
				render={({ field }) => (
					<FormItem className="mt-4 flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
						<FormControl>
							<Checkbox checked={field.value} onCheckedChange={field.onChange} />
						</FormControl>
						<div className="space-y-1 leading-none">
							<FormLabel>Is this an apartment?</FormLabel>
						</div>
					</FormItem>
				)}
			/>

			{Boolean(isApartment) && (
				<FormField
					control={form.control}
					name="apartmentNumber"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Apartment Number</FormLabel>
							<FormControl>
								<Input placeholder="Apartment Number" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			)}
		</>
	)
}

export default IsApartmentFields
