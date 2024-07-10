import { Button, FormDescription, Input, Label } from "@/components/ui"
import { useFieldArray } from "react-hook-form"

function OptionsFields({ form }: { form: any }): React.ReactElement {
	const { append, fields, remove } = useFieldArray({
		control: form.control,
		name: "options",
	})

	return (
		<>
			{fields.map((field, index) => (
				<div key={field.id}>
					<Label className="underline">Option {index + 1}</Label>
					<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
						<div>
							<Label>Name</Label>
							<Input {...form.register(`options.${index}.name`)} placeholder="Option name" />
						</div>
						<div>
							<Label>Price</Label>
							<Input
								type="number"
								min={0}
								{...form.register(`options.${index}.price`)}
								placeholder="Price"
							/>
							<FormDescription>Price in CLP. Example: 17000</FormDescription>
						</div>
						<div>
							<Label>Stock</Label>
							<Input
								type="number"
								min={0}
								{...form.register(`options.${index}.stock`)}
								placeholder="Stock"
							/>
						</div>
						<div>
							<Label>Discount</Label>
							<Input
								type="number"
								min={0}
								{...form.register(`options.${index}.discount`)}
								placeholder="Discount"
							/>
							<FormDescription>Discount in percentage. Example: 10</FormDescription>
						</div>

						<Button
							type="button"
							className="col-span-2 mt-3 w-full"
							variant={"destructive"}
							onClick={() => {
								remove(index)
							}}
						>
							Remove option {index + 1}
						</Button>
					</div>
				</div>
			))}

			<Button
				className="mt-3 w-full"
				type="button"
				variant={"outline"}
				onClick={() => {
					append({
						name: "",
						price: 0,
						stock: 0,
						discount: 0,
					})
				}}
			>
				Add new Option
			</Button>
		</>
	)
}

export default OptionsFields
