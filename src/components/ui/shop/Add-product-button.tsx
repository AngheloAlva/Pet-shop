"use client"

import { cn } from "@/lib"

import { useToast, ToastAction, Button } from "@/components/ui"

import type { GetProductResponse } from "@/interfaces"
import { useCartStore } from "@/store/cart"

interface AddProductButtonProps {
	quantity: number
	product: GetProductResponse
	className?: string
	optionSelectedIndex: number
}

function AddProductButton({
	optionSelectedIndex,
	product,
	quantity,
	className,
}: AddProductButtonProps): React.ReactElement {
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

		// useCartStore.getState().addProduct(newProductCart)
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

export default AddProductButton
