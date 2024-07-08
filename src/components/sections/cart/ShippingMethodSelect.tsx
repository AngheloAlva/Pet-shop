import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui"

const shippingMethods = ["CHILEXPRESS", "STARKEN", "CORREOS_CHILE", "SHOP_PICKUP"]

interface ShippingMethodSelectProps {
	onChange: (method: "CHILEXPRESS" | "STARKEN" | "CORREOS_CHILE" | "SHOP_PICKUP") => void
	shippingMethod: string
}

function ShippingMethodSelect({
	onChange,
	shippingMethod,
}: ShippingMethodSelectProps): React.ReactElement {
	return (
		<Select onValueChange={onChange}>
			<SelectTrigger className="mt-2 bg-white">
				<SelectValue placeholder={shippingMethod} />
			</SelectTrigger>
			<SelectContent>
				{shippingMethods.map((method) => (
					<SelectItem value={method} key={method}>
						{method.split("_").join(" ")}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}

export default ShippingMethodSelect
