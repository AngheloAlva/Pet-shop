import Image from "next/image"
import Link from "next/link"

import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui"
import AlertRestoreProduct from "./AlertRestoreProduct"
import AlertDeleteProduct from "./AlertDeleteProduct"

import { Product } from "@prisma/client"

function AdminProductItem({ product }: { product: Product }): React.ReactElement {
	return (
		<Card className="flex items-center">
			<CardHeader className="p-2">
				<Image
					src={product.images[0]}
					alt={product.name}
					width={300}
					height={300}
					className="h-auto w-24 rounded-lg object-contain"
				/>
			</CardHeader>

			<CardContent className="flex w-full flex-col p-5">
				<CardTitle>{product.name}</CardTitle>
				<CardDescription>{/* {product.brand?.name} */}</CardDescription>

				<div className="mt-2 flex flex-wrap gap-2 text-xs">
					{/* {product.options?.map((option, index) => (
            <OptionDialog
              key={index}
              option={option}
              authId={user?.id}
              refresh={refresh}
            />
          ))} */}
				</div>
			</CardContent>

			{product.isAvailable ? (
				<div className="flex w-1/4 flex-col gap-2 pr-2">
					<Link href={`/admin/products/update/${product.id}`}>
						<Button variant={"outline"} size={"sm"} className="w-full">
							Edit
						</Button>
					</Link>

					<AlertDeleteProduct productId={product.id} />
				</div>
			) : (
				<div className="flex w-1/4 flex-col gap-2 pr-2">
					<AlertRestoreProduct productId={product.id} />
				</div>
			)}
		</Card>
	)
}

export default AdminProductItem
