import { redirect } from "next/navigation"
import { getOrders } from "@/actions"
import Link from "next/link"

import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui"

async function AdminOrdersInfo(): Promise<React.ReactElement> {
	const { total } = await getOrders(1, 10)

	return (
		<Card className="flex flex-col items-center justify-between">
			<div className="flex w-full items-center justify-between">
				<CardHeader>
					<CardTitle className="text-xl">Orders</CardTitle>
					<CardDescription>Total number of orders</CardDescription>
				</CardHeader>
				<CardContent className="p-6 text-4xl font-semibold">{total}</CardContent>
			</div>

			<Link href="/admin/orders" className="w-full px-6 pb-6">
				<Button variant={"outline"} className="w-full">
					View details
				</Button>
			</Link>
		</Card>
	)
}

export default AdminOrdersInfo
