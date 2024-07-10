import Image from "next/image"
import Link from "next/link"

import AlertRestoreBrand from "./AlertRestoreProduct"
import AlertDeleteBrand from "./AlertDeleteBrand"
import { Button, Card } from "@/components/ui"

import type { Brand } from "@prisma/client"

function AdminBrandItem({
	brand,
	refresh,
}: {
	brand: Brand
	refresh: () => Promise<void>
}): React.ReactElement {
	return (
		<Card className="flex gap-4 p-5">
			<div className="overflow-hidden rounded-lg bg-blue-200 p-2">
				<Image
					width={100}
					height={100}
					src={brand.image}
					alt={brand.name}
					className="h-full w-40 object-contain"
				/>
			</div>
			<div className="flex flex-col justify-between">
				<h3 className="text-xl font-semibold">Name: {brand.name}</h3>
				{brand.isAvailable ? (
					<div className="space-x-2">
						<Link href={`/admin/brands/edit/${brand.id}`}>
							<Button variant={"outline"} size={"sm"}>
								Edit
							</Button>
						</Link>
						<AlertDeleteBrand brandId={brand.id} refresh={refresh} />
					</div>
				) : (
					<AlertRestoreBrand brandId={brand.id} refresh={refresh} />
				)}
			</div>
		</Card>
	)
}

export default AdminBrandItem
