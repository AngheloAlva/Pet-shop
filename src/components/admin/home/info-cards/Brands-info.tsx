import { getBrands } from "@/actions"
import Link from "next/link"

import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui"

async function AdminBrandsInfo(): Promise<React.ReactElement> {
	const { total } = await getBrands({
		isAvailable: true,
		limit: 1,
		page: 1,
	})

	return (
		<Card className="flex flex-col items-center justify-between">
			<div className="flex w-full items-center justify-between">
				<CardHeader>
					<CardTitle className="text-xl">Brands</CardTitle>
					<CardDescription>Total number of brands</CardDescription>
				</CardHeader>
				<CardContent className="p-6 text-4xl font-semibold">{total}</CardContent>
			</div>

			<Link href="/admin/brands" className="w-full px-6 pb-6">
				<Button variant={"outline"} className="w-full">
					View details
				</Button>
			</Link>
		</Card>
	)
}

export default AdminBrandsInfo
