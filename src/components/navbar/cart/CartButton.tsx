"use client"

import Link from "next/link"

import { useCartStore } from "@/store/cart"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui"
import { FaBasketShopping } from "react-icons/fa6"
import ProductCartItem from "./ProductCartItem"
import { Button } from "@/components/ui"

function CartButton(): React.ReactElement {
	const { products } = useCartStore()

	return (
		<Popover>
			<PopoverTrigger className="text-text-200 hover:text-bg-100 hover:bg-cream-500 cursor-pointer rounded-lg p-1 transition-colors">
				<FaBasketShopping className="h-7 w-7" />
			</PopoverTrigger>
			<PopoverContent className="w-[25rem]">
				<div className="flex flex-col">
					{products.length === 0 && (
						<p className="text-center font-semibold">No hay productos en el carrito</p>
					)}
					{products.length > 0 && (
						<div className="flex flex-col gap-5">
							{products.map((product, index) => {
								if (index >= 3) {
									return null
								}

								return <ProductCartItem key={product.id} productCart={product} />
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

export default CartButton
