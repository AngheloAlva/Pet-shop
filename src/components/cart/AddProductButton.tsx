"use client"

import { useCartStore } from "@/store"
import { cn } from "@/lib"

import { useToast, Button } from "@/components/ui"

import type { GetProductResponse, ProductCart } from "@/interfaces"

interface AddProductButtonProps {
	quantity: number
	product: GetProductResponse
	className?: string
	optionSelectedIndex: number
}

export default function AddProductButton({
	optionSelectedIndex,
	product,
	quantity,
	className,
}: AddProductButtonProps): React.ReactElement {
	const addProduct = useCartStore((state) => state.addProduct)
	const { toast } = useToast()

	const handleAddToCart = async (): Promise<void> => {
		if (product.options[optionSelectedIndex].stock < quantity) {
			toast({
				title: "Not enough stock",
				description: "Please select a lower quantity",
				duration: 3000,
			})
			return
		}

		const newProductCart: ProductCart = {
			product,
			quantity,
			id: product.id,
			optionSelectedIndex,
			productId: product.id,
			price: product.options[optionSelectedIndex].price,
		}

		addProduct(newProductCart)
		toast({
			title: "Product added to cart",
			description: `${product.name} x ${quantity}`,
			duration: 2000,
		})
	}

	return (
		<Button
			className={cn(className, "h-11 w-full bg-green-600 hover:bg-green-500")}
			disabled={product.options[optionSelectedIndex].stock < quantity}
			onClick={async () => {
				await handleAddToCart()
			}}
		>
			Add to cart
		</Button>
	)
}
