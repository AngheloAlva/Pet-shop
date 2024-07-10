"use client"

import { redirect } from "next/navigation"
import { useCartStore } from "@/store"

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
	Button,
	useToast,
	ToastAction,
} from "@/components/ui"
import { FaBasketShopping } from "react-icons/fa6"
import ProductCartItem from "./ProductCartItem"

import type { User } from "@prisma/client"
import Link from "next/link"

export default function CartButton({ user }: { user: User | undefined }): React.ReactElement {
	const cart = useCartStore((state) => state.cart)
	const isLogged = user != null
	const { toast } = useToast()

	const handleRedirectToCheckout = () => {
		if (!isLogged) {
			toast({
				title: "You need to be logged in to access the checkout",
				description: "Please create an account or log in to continue.",
				action: (
					<Link href="/auth/register">
						<ToastAction altText="Register">Register</ToastAction>
					</Link>
				),
			})
		}

		redirect("/checkout")
	}

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

					<Button
						onClick={() => handleRedirectToCheckout()}
						variant={"outline"}
						className="mt-5 w-full"
					>
						Go to Checkout
					</Button>
				</div>
			</PopoverContent>
		</Popover>
	)
}
