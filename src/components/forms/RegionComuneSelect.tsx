import { regions } from "@/lib"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"

interface RegionComuneSelectProps {
	form: any
}

function RegionComuneSelect({ form }: RegionComuneSelectProps): React.ReactElement {
	const comune = form.watch("region")

	return (
		<>
			<FormField
				control={form.control}
				name="region"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Region</FormLabel>
						<Select onValueChange={field.onChange} defaultValue={field.value}>
							<FormControl>
								<SelectTrigger>
									<SelectValue placeholder="Select a region" />
								</SelectTrigger>
							</FormControl>
							<SelectContent>
								{regions.map((region) => (
									<SelectItem key={region.name} value={region.name}>
										{region.name}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name="commune"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Commune</FormLabel>
						<Select onValueChange={field.onChange} defaultValue={field.value}>
							<FormControl>
								<SelectTrigger>
									<SelectValue placeholder="Select a commune" />
								</SelectTrigger>
							</FormControl>
							<SelectContent>
								{regions
									.find((r) => r.name === comune)
									?.communes.map((commune) => (
										<SelectItem key={commune} value={commune}>
											{commune}
										</SelectItem>
									))}
							</SelectContent>
						</Select>
						<FormMessage />
					</FormItem>
				)}
			/>
		</>
	)
}

export default RegionComuneSelect
