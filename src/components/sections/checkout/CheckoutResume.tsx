"use client"

import { useCartStore } from "@/store"

import { ResumeSection, SummarySection } from "@/components/cart"

import type { User } from "@prisma/client"

export default function CheckoutResume({ user }: { user: User }): React.ReactElement {
	const cart = useCartStore((state) => state.cart)

	return (
		<>
			<div className="flex flex-col gap-10 lg:flex-row">
				<ResumeSection products={cart} />

				<SummarySection products={cart} />
			</div>
		</>
	)
}
