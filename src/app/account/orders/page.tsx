import { getOrdersByUser } from "@/actions"
import { auth } from "@/auth"
import Link from "next/link"

import { Button, OrderCard } from "@/components/ui"

export default async function OrdersPage(): Promise<React.ReactElement> {
	const session = await auth()

	if (!session?.user || session?.user?.id == undefined) {
		return (
			<main className="flex flex-col gap-5 px-5 pb-20 pt-24 text-text-100 sm:px-10 md:px-20 md:pt-40 lg:px-40">
				<h1 className="text-3xl font-bold">Orders</h1>
				<p>You must be logged in to see your orders.</p>
			</main>
		)
	}

	const { orders } = await getOrdersByUser(session.user.id)

	return (
		<main className="flex flex-col gap-5 px-5 pb-20 pt-24 text-text-100 sm:px-10 md:px-20 md:pt-40 lg:px-40">
			<h1 className="text-3xl font-bold">Orders</h1>

			{orders.length === 0 ? (
				<>
					<p>You haven&apos;t placed any orders yet.</p>
					<Button size={"lg"} className="mt-6">
						<Link href="/" className="w-full">
							Go to home
						</Link>
					</Button>
				</>
			) : (
				<section className="flex flex-col gap-5">
					{orders.map((order) => (
						<OrderCard order={order} key={order.id} />
					))}
				</section>
			)}
		</main>
	)
}
