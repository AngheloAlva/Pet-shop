"use client"

import { useCartStore, useCheckoutStore } from "@/store"
import { Button, useToast } from "../ui"
import { useEffect, useState } from "react"
import { createCheckoutSession } from "@/actions"
import { redirect } from "next/navigation"
import { calculateCartTotals } from "@/helpers"

export default function ShippingButton({ userId }: { userId: string }): React.ReactElement {
	const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false)

	const { haveAddress, shippingMethod, isLoading, setIsLoading } = useCheckoutStore()
	const cart = useCartStore((state) => state.cart)

	const { toast } = useToast()

	useEffect(() => {
		if (haveAddress && shippingMethod) {
			setIsButtonEnabled(true)
		}
	}, [haveAddress, shippingMethod])

	const handlePay = async (): Promise<void> => {
		try {
			setIsLoading(true)

			const { ok, message, orderId } = await createCheckoutSession({
				currency: "usd",
				status: "PENDING",
				userId,
				shippingCost: shippingMethod.price,
				shippingMethod: shippingMethod.method,
				subtotal: cart.reduce((acc, { price }) => acc + price, 0),
				total: calculateCartTotals(cart, shippingMethod.price).totalPriceAfterDiscount,
			})

			if (!ok) {
				toast({
					title: "Payment failed",
					description: message,
					variant: "destructive",
				})
			}

			redirect(`/account/orders/${orderId}1`)
		} catch (error) {
			setIsLoading(false)
		}
	}

	return (
		<Button
			size={"lg"}
			onClick={handlePay}
			disabled={!isButtonEnabled}
			className="mt-5 w-full bg-green-600 hover:bg-green-500"
		>
			{isLoading ? (
				<div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
			) : (
				"Pay"
			)}
		</Button>
	)
}
