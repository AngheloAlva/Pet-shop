import Image from "next/image"
import Link from "next/link"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui"

import type { GetProductResponse } from "@/interfaces"

function ProductSearchItem({ product }: { product: GetProductResponse }): React.ReactElement {
	return (
		<Card>
			<Link
				href={`/products/${product.slug}`}
				className="flex h-full max-h-40 w-full cursor-pointer gap-2 px-3 py-3"
			>
				<CardHeader className="relative flex h-full w-1/5 items-center justify-center overflow-hidden p-0">
					<Image
						width={100}
						height={100}
						src={product.images[0]}
						alt={product.name}
						className="h-full rounded-lg object-contain"
					/>
				</CardHeader>
				<CardContent className="flex flex-col p-0">
					<CardTitle>{product.name}</CardTitle>
					<CardDescription>{/* {product.brand?.name} */}</CardDescription>

					<div className="flex cursor-default flex-col text-xs">
						{product.options?.map((option) => (
							<span key={option.id}>{option.name + ": " + option.price}</span>
						))}
					</div>
				</CardContent>
			</Link>
		</Card>
	)
}

export default ProductSearchItem
