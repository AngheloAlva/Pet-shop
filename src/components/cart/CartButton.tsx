"use client"

import { useCartStore } from "@/store"
import Link from "next/link"

import { Popover, PopoverContent, PopoverTrigger, Button } from "@/components/ui"
import { FaBasketShopping } from "react-icons/fa6"
import ProductCartItem from "./ProductCartItem"

export default function CartButton(): React.ReactElement {
	const cart = useCartStore((state) => state.cart)

	return (
		<Popover>
			<PopoverTrigger className="cursor-pointer rounded-lg p-1 text-text-200 transition-colors hover:bg-cream-500 hover:text-bg-100">
				<FaBasketShopping className="h-7 w-7" />
			</PopoverTrigger>
			<PopoverContent className="w-[25rem]">
				<div className="flex flex-col">
					{cart.length === 0 ? (
						<p className="text-center font-semibold">No hay productos en el carrito</p>
					) : (
						<div className="flex flex-col gap-5">
							{cart.map((item, index) => {
								if (index >= 3) {
									return null
								}

								return <ProductCartItem key={item.id} productCart={item} />
							})}
						</div>
					)}

					<Link href="/checkout">
						<Button variant={"outline"} className="mt-5 w-full">
							Go to Checkout
						</Button>
					</Link>
				</div>
			</PopoverContent>
		</Popover>
	)
}
