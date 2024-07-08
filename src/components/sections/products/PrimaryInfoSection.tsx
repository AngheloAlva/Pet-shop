"use client"

import { calculateDiscount } from "@/helpers"
import { useState } from "react"
import Link from "next/link"

import { AddProductButton } from "@/components/cart"
import { FaPlus, FaMinus } from "react-icons/fa6"
import { Button } from "@/components/ui"

import type { GetProductResponse } from "@/interfaces"

interface PrimaryInfoSectionProps {
	product: GetProductResponse
}

export default function PrimaryInfoSection({
	product,
}: PrimaryInfoSectionProps): React.ReactElement {
	const [optionSelected, setOptionSelected] = useState(0)
	const [quantity, setQuantity] = useState(1)

	const handleAdd = (): void => {
		if (product.options?.[optionSelected].stock > quantity) {
			setQuantity(quantity + 1)
		}
	}

	const handleSubtract = (): void => {
		if (quantity > 1) {
			setQuantity(quantity - 1)
		}
	}

	const handleOptionChange = (index: number): void => {
		setOptionSelected(index)
		setQuantity(1)
	}

	return (
		<section className="flex flex-col gap-2 text-text-100 md:w-1/2 lg:pt-10 xl:w-2/3">
			<h1 className="text-blue text-pretty text-4xl font-bold tracking-wide">{product.name}</h1>
			<Link href={`/brands/${product.brand?.slug}`} className="w-fit">
				<h2 className="text-xl font-bold text-cream-700">{product.brand?.name}</h2>
			</Link>

			<p className="text-pretty text-sm text-text-200">{product.miniDesc}</p>

			<span className="mt-4 space-x-2 text-2xl font-semibold">
				{product.options?.[optionSelected].discount > 0 ? (
					<>
						<span>
							{calculateDiscount(
								product.options?.[optionSelected].price,
								product.options?.[optionSelected].discount
							)?.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}
						</span>
						<span className="text-base text-gray-500 line-through">
							{product.options?.[optionSelected].price?.toLocaleString("es-CL", {
								style: "currency",
								currency: "CLP",
							})}
						</span>
					</>
				) : (
					product.options?.[optionSelected].price?.toLocaleString("es-CL", {
						style: "currency",
						currency: "CLP",
					})
				)}
			</span>

			<div className="my-4">
				<div className="flex flex-wrap gap-2">
					{product.options?.map((option, index) => (
						<Button
							size={"default"}
							key={option.id}
							variant={"secondary"}
							disabled={option.stock === 0}
							onClick={() => {
								handleOptionChange(index)
							}}
							className={
								optionSelected === index
									? "hover:bg-bg-cream-600 bg-cream-600 text-bg-100"
									: "" +
										"w-fit rounded-lg border border-input bg-transparent px-3 py-1 transition-colors hover:bg-cream-500 hover:text-bg-100"
							}
						>
							{option.name}
						</Button>
					))}
				</div>
				<p className="mt-1 text-sm text-text-200">
					{product.options?.[optionSelected].stock} in stock
				</p>
			</div>

			<div className="flex w-full items-center gap-2">
				<Button variant={"outline"} className="min-h-11 min-w-11" onClick={handleSubtract}>
					<FaMinus className="text-text-200" />
				</Button>
				<Button
					variant={"outline"}
					className="min-h-11 min-w-11 cursor-default text-text-200 hover:bg-white"
				>
					{quantity}
				</Button>
				<Button variant={"outline"} className="min-h-11 min-w-11" onClick={handleAdd}>
					<FaPlus className="text-text-200" />
				</Button>

				<AddProductButton
					optionSelectedIndex={optionSelected}
					quantity={quantity}
					product={product}
				/>
			</div>
		</section>
	)
}
