"use client"

import { useCartStore, useCheckoutStore } from "@/store"
import { calculateCartTotals } from "@/helpers"
import { cn } from "@/lib"

import { Card } from "@/components/ui"

interface SummarySectionProps {
	className?: string
}

function SummarySection({ className }: SummarySectionProps): React.ReactElement {
	const { shippingMethod } = useCheckoutStore()
	const { cart } = useCartStore()

	const { totalDiscount, totalPriceAfterDiscount, totalPriceBeforeDiscount } = calculateCartTotals(
		cart,
		shippingMethod.price
	)

	return (
		<section className={cn("flex w-full flex-col gap-2 lg:w-1/3", className)}>
			<h2 className="text-2xl font-bold">Summary</h2>
			<Card className="px-6 py-4 text-text-200">
				<div className="flex justify-between font-medium">
					<p>
						<strong>Subtotal</strong>
					</p>
					<p>
						{totalPriceBeforeDiscount.toLocaleString("es-CL", {
							style: "currency",
							currency: "CLP",
						})}
					</p>
				</div>
				<div className="flex justify-between font-medium">
					<p>
						<strong>Discount</strong>
					</p>
					<p>{totalDiscount.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}</p>
				</div>
				<div className="flex justify-between font-medium">
					<p>
						<strong>Shipping</strong>
					</p>
					<p>
						{shippingMethod.price.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}
					</p>
				</div>
				<div className="flex justify-between font-medium">
					<p>
						<strong>Total</strong>
					</p>
					<p>
						{totalPriceAfterDiscount.toLocaleString("es-CL", {
							style: "currency",
							currency: "CLP",
						})}
					</p>
				</div>
			</Card>
		</section>
	)
}

export default SummarySection
