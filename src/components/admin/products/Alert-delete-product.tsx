import { deleteProduct } from "@/actions"
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
	useToast,
} from "@/components/ui"

function AlertDeleteProduct({ productId }: { productId: number }): React.ReactElement {
	const { toast } = useToast()

	const handleDelete = async (): Promise<void> => {
		try {
			await deleteProduct(productId)
			toast({
				title: "Product deleted",
				description: "The product was deleted successfully",
				duration: 3000,
			})
		} catch (error) {
			toast({
				title: "Error",
				description: "An error occurred while deleting the product",
				duration: 3000,
				variant: "destructive",
			})
		}
	}

	return (
		<AlertDialog>
			<AlertDialogTrigger className="inline-flex h-8 items-center justify-center whitespace-nowrap rounded-md bg-destructive px-3 text-xs font-medium text-destructive-foreground shadow-sm transition-colors hover:bg-destructive/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
				Delete
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription className="text-pretty">
						This action deletes the product temporarily. You can restore it later.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}

export default AlertDeleteProduct
