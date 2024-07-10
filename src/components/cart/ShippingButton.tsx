"use client"

import { useCartStore, useCheckoutStore } from "@/store"
import { Button, useToast } from "../ui"
import { useEffect, useState } from "react"
import { createCheckoutSession } from "@/actions"
import { calculateCartTotals } from "@/helpers"
import { useRouter } from "next/navigation"

export default function ShippingButton({ userId }: { userId: string }): React.ReactElement {
	const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false)
	const router = useRouter()

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

			const { ok, message, url } = await createCheckoutSession({
				cart,
				userId,
				currency: "usd",
				status: "PENDING",
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

			if (url !== undefined) router.push(url)
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
