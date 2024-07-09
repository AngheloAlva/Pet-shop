"use client"

import { calculateDiscount } from "@/helpers"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { Card, CardContent, CardDescription, CardHeader, CardTitle, Button } from "@/components/ui"
import AddProductButton from "../../cart/AddProductButton"

import type { GetProductResponse } from "@/interfaces"

export default function ProductCard({
	product,
}: {
	product: GetProductResponse
}): React.ReactElement {
	const [optionSelected, setOptionSelected] = useState(0)

	return (
		<Card className="flex h-full w-full flex-col">
			<Link href={`/products/${product.slug}`}>
				<CardHeader className="relative flex h-72 w-full items-center justify-center overflow-hidden p-0">
					{product.options?.[optionSelected].discount > 0 ? (
						<span className="absolute right-2 top-2 z-50 rounded-md bg-red-200 px-3 py-1 font-bold text-red-600">
							{product.options?.[optionSelected].discount + "% OFF"}
						</span>
					) : null}
					<Image
						src={product.images[0]}
						alt={product.name}
						width={300}
						height={300}
						className="h-full rounded-lg object-contain"
					/>
				</CardHeader>
			</Link>
			<CardContent className="mt-4 flex h-full flex-col justify-between">
				<div>
					<Link href={`/products/${product.slug}`}>
						<CardTitle>{product.name}</CardTitle>
					</Link>
					<Link href={`/brands/${product.brand?.slug}`}>
						<CardDescription>{product.brand?.name}</CardDescription>
					</Link>

					<span className="cursor-default">
						{product.options?.[optionSelected].discount > 0 ? (
							<>
								<span className="text-sm text-gray-500 line-through">
									{product.options?.[optionSelected].price?.toLocaleString("es-CL", {
										style: "currency",
										currency: "CLP",
									})}
								</span>
								<span className="ml-2 text-blue-500">
									{calculateDiscount(
										product.options?.[optionSelected].price,
										product.options?.[optionSelected].discount
									)?.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}
								</span>
							</>
						) : (
							product.options?.[optionSelected].price?.toLocaleString("es-CL", {
								style: "currency",
								currency: "CLP",
							})
						)}
					</span>

					<div className="my-4 flex flex-wrap gap-2 text-xs">
						{product.options?.map((option, index) => (
							<Button
								size={"sm"}
								key={option.id}
								variant={"secondary"}
								disabled={option.stock === 0}
								onClick={() => {
									setOptionSelected(index)
								}}
								className={
									optionSelected === index
										? "bg-cream-600 text-bg-100 hover:bg-cream-600"
										: "" +
											"w-fit rounded-lg border border-input bg-transparent px-3 py-1 transition-colors hover:bg-cream-500 hover:text-bg-100"
								}
							>
								{option.name}
							</Button>
						))}
					</div>
				</div>

				<AddProductButton
					optionSelectedIndex={optionSelected}
					product={product}
					className=""
					quantity={1}
				/>
			</CardContent>
		</Card>
	)
}
