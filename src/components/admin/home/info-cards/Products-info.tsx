import { getProducts } from "@/actions"
import Link from "next/link"

import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui"

async function AdminProductsInfo(): Promise<React.ReactElement> {
	const { total } = await getProducts({
		isAvailable: true,
		limit: 1,
		page: 1,
	})

	return (
		<Card className="flex flex-col items-center justify-between">
			<div className="flex w-full items-center justify-between">
				<CardHeader>
					<CardTitle className="text-xl">Products</CardTitle>
					<CardDescription>Total number of products</CardDescription>
				</CardHeader>
				<CardContent className="p-6 text-4xl font-semibold">{total}</CardContent>
			</div>

			<Link href="/admin/products" className="w-full px-6 pb-6">
				<Button variant={"outline"} className="w-full">
					View details
				</Button>
			</Link>
		</Card>
	)
}

export default AdminProductsInfo
