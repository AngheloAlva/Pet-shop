import Link from "next/link"

import { calculateDiscount } from "@/helpers"
import { useCartStore } from "@/store"
import Image from "next/image"

import { FaMinus, FaPlus, FaTrashCan } from "react-icons/fa6"
import { Button } from "@/components/ui"

import type { ProductCart } from "@/interfaces"

export default function ProductCartItem({
	productCart,
}: {
	productCart: ProductCart
}): React.ReactElement {
	const price = productCart.product.options[productCart.optionSelectedIndex].price
	const priceWithDiscount = calculateDiscount(
		price,
		productCart.product.options[productCart.optionSelectedIndex].discount
	)

	const handleDelete = async (): Promise<void> => {
		useCartStore.getState().removeProduct(productCart.product.id, productCart.optionSelectedIndex)
	}

	const handleAdd = async (): Promise<void> => {
		const productStock = productCart.product.options[productCart.optionSelectedIndex].stock
		if (productStock <= productCart.quantity) {
			return
		}

		useCartStore.getState().updateProductQuantity(productCart, productCart.quantity + 1)
	}

	const handleSubtract = async (): Promise<void> => {
		if (productCart.quantity === 1) {
			return
		}

		useCartStore.getState().updateProductQuantity(productCart, productCart.quantity - 1)
	}

	return (
		<div className="flex gap-2">
			<Link href={`/products/${productCart.product.slug}`} className="h-16 w-16 sm:h-16 sm:w-16">
				<Image
					width={80}
					height={80}
					src={productCart.product.images[0]}
					alt={productCart.product.name}
					className="h-full w-full rounded-lg object-cover"
				/>
			</Link>

			<div className="flex w-full items-start text-text-200">
				<div className="flex w-full flex-col">
					<Link
						href={`/products/${productCart.product.slug}`}
						className="text-sm font-medium sm:text-base"
					>
						{productCart.product.name}
						{" - "}
						{productCart.product.options[productCart.optionSelectedIndex].name}
					</Link>
					<p className="text-nowrap text-xs text-muted-foreground sm:text-sm">
						Quantity: {productCart.quantity}
					</p>
					<p className="mt-1 text-nowrap text-sm sm:text-base">
						{productCart.product.options[productCart.optionSelectedIndex].discount > 0 ? (
							<>
								<span className="text-xs text-muted-foreground line-through sm:text-sm">
									{productCart.product.options[
										productCart.optionSelectedIndex
									].price.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}
								</span>
								<span className="ml-2 text-sm sm:text-base">
									{priceWithDiscount.toLocaleString("es-CL", {
										style: "currency",
										currency: "CLP",
									})}
								</span>
							</>
						) : (
							(price * productCart.quantity).toLocaleString("es-CL", {
								style: "currency",
								currency: "CLP",
							})
						)}
					</p>
				</div>

				<div className="flex h-full w-full flex-col items-end justify-between">
					<Button variant="destructive" className="w-fit" size="sm" onClick={handleDelete}>
						<FaTrashCan />
					</Button>

					<div className="flex gap-1 text-text-200">
						<Button size={"sm"} variant={"outline"} onClick={handleSubtract}>
							<FaMinus />
						</Button>
						<Button
							size={"sm"}
							variant={"outline"}
							className="cursor-default text-text-200 hover:bg-white"
						>
							{productCart.quantity}
						</Button>
						<Button size={"sm"} variant={"outline"} onClick={handleAdd}>
							<FaPlus />
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
