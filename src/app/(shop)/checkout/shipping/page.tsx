import { notFound } from "next/navigation"
import { auth } from "@/auth"

import {
	AddressSection,
	ShippingButton,
	ShippingMethodSelect,
	SummarySection,
} from "@/components/cart"

export default async function PaymentPage(): Promise<React.ReactElement> {
	const session = await auth()

	if (!session || !session.user?.id) {
		notFound()
	}

	return (
		<main className="lg:px-34 flex flex-col gap-10 px-5 pb-20 pt-28 text-text-100 sm:px-10 md:flex-row md:px-20 md:pt-40 xl:px-44 2xl:px-60">
			<AddressSection userId={session.user.id} />

			<div className="w-full space-y-10 md:w-1/3 md:space-y-5">
				<div>
					<h2 className="text-2xl font-bold">Shipping method</h2>
					<ShippingMethodSelect />
				</div>

				<SummarySection className="lg:w-full" />

				<ShippingButton userId={session.user.id} />
			</div>
		</main>
	)
}
