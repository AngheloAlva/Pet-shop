"use client"

import { useRouter } from "next/navigation"
import { shippingMethods } from "@/lib"
import { useCartStore } from "@/store"
import { useState } from "react"

import { ShippingMethodSelect, SummarySection } from "@/components/cart"
import { Button } from "@/components/ui"

function PaymentPage(): React.ReactElement {
	// const { user } = useUser()
	const router = useRouter()
	const { cart } = useCartStore()
	// const { user: userDb, refetchUser, isLoading } = useAddressData(user?.id ?? "")
	// const { isButtonEnabled, setIsButtonEnabled } = useShippingButton(userDb, products)
	const [isButtonLoading, setIsButtonLoading] = useState(false)

	const [shippingMethod, setShippingMethod] = useState<{
		method: "CHILEXPRESS" | "STARKEN" | "CORREOS_CHILE" | "SHOP_PICKUP"
		price: number
	}>({
		method: "CHILEXPRESS",
		price: 0,
	})

	const handlePay = async (): Promise<void> => {
		// if (user === null || user === undefined) return

		try {
			setIsButtonLoading(true)
			// setIsButtonEnabled(false)

			await new Promise((resolve) => setTimeout(resolve, 1000))

			// const url = await createCheckoutSession({
			// 	amount: products.reduce((acc, { price }) => acc + price, 0) + shippingMethod.price,
			// 	currency: "usd",
			// 	status: "PENDING",
			// 	order: user.id,
			// })
		} catch (error) {
			setIsButtonLoading(false)
			// setIsButtonEnabled(true)
		}
	}

	const handleShippingMethod = (
		method: "CHILEXPRESS" | "STARKEN" | "CORREOS_CHILE" | "SHOP_PICKUP"
	): void => {
		const price = shippingMethods.find((m) => m[method])?.[method] ?? 0

		setShippingMethod({
			method,
			price,
		})
	}

	return (
		<main className="lg:px-34 flex w-screen flex-col gap-10 px-5 pb-20 pt-28 text-text-100 sm:px-10 md:flex-row md:px-20 md:pt-40 xl:px-44 2xl:px-60">
			{/* <AddressSection
				userId={user?.id ?? ""}
				address={userDb?.address?.[0] ?? null}
				refetchUser={refetchUser}
				setIsButtonEnabled={setIsButtonEnabled}
			/> */}

			<div className="w-full space-y-10 md:w-1/3 md:space-y-5">
				<div>
					<h2 className="text-2xl font-bold">Shipping method</h2>
					<ShippingMethodSelect
						onChange={handleShippingMethod}
						shippingMethod={shippingMethod.method}
					/>
				</div>

				<SummarySection products={cart} className="lg:w-full" shippingCost={shippingMethod.price} />

				<Button
					size={"lg"}
					onClick={handlePay}
					// disabled={!isButtonEnabled}
					className="mt-5 w-full bg-green-600 hover:bg-green-500"
				>
					{isButtonLoading ? (
						<div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
					) : (
						"Pay"
					)}
				</Button>
			</div>
		</main>
	)
}

export default PaymentPage
