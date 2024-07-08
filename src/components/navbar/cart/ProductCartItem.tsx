import Link from "next/link"

import { calculateDiscount } from "@/helpers"

import { FaMinus, FaPlus, FaTrashCan } from "react-icons/fa6"
import { Button } from "@/components/ui"

import type { ProductCart } from "@/interfaces"
import { useCartStore } from "@/store/cart"
import Image from "next/image"

export function ProductCartItem({ productCart }: { productCart: ProductCart }): React.ReactElement {
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

		useCartStore
			.getState()
			.increaseQuantity(productCart.product.id, productCart.optionSelectedIndex)
	}

	const handleSubtract = async (): Promise<void> => {
		useCartStore
			.getState()
			.decreaseQuantity(productCart.product.id, productCart.optionSelectedIndex)
	}

	return (
		<div className="flex gap-2">
			<Link href={`/products/${productCart.product.slug}`} className="h-20 w-20">
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
					<Link href={`/products/${productCart.product.slug}`} className="font-medium">
						{productCart.product.name}
						{" - "}
						{productCart.product.options[productCart.optionSelectedIndex].name}
					</Link>
					<p className="text-nowrap text-sm text-muted-foreground">
						{/* Option: {productCart.product.options[productCart.optionSelectedIndex].name} */}
					</p>
					<p className="text-nowrap text-sm text-muted-foreground">
						Quantity: {productCart.quantity}
					</p>
					<p className="mt-1 text-nowrap">
						{productCart.product.options[productCart.optionSelectedIndex].discount > 0 ? (
							<>
								<span className="text-sm text-muted-foreground line-through">
									{productCart.product.options[
										productCart.optionSelectedIndex
									].price.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}
								</span>
								<span className="ml-2">
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
