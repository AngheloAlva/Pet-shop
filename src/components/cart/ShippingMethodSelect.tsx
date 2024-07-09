"use client"

import { useCheckoutStore } from "@/store"
import { shippingMethods } from "@/lib"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui"

function ShippingMethodSelect(): React.ReactElement {
	const { shippingMethod, updateShippingMethod } = useCheckoutStore()

	return (
		<Select onValueChange={updateShippingMethod} defaultValue={shippingMethod.method}>
			<SelectTrigger className="mt-2 bg-white">
				<SelectValue placeholder={shippingMethod.method} />
			</SelectTrigger>
			<SelectContent>
				{shippingMethods.map(({ method }) => (
					<SelectItem value={method} key={method}>
						{method.split("_").join(" ")}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}

export default ShippingMethodSelect
