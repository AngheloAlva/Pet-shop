import { deleteBrand } from "@/actions"

import {
	useToast,
	AlertDialog,
	AlertDialogTitle,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogDescription,
} from "@/components/ui"

function AlertDeleteBrand({ brandId, refresh }: AlertDeleteBrandProps): React.ReactElement {
	const { toast } = useToast()

	const handleDelete = async (): Promise<void> => {
		try {
			await deleteBrand(brandId)
			await refresh()
			toast({
				title: "Brand deleted",
				description: "The brand was deleted successfully",
				duration: 3000,
			})
		} catch (error) {
			toast({
				title: "Error",
				description: "An error occurred while deleting the brand",
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
						This action deletes the brand temporarily. You can restore it later.
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

export default AlertDeleteBrand

interface AlertDeleteBrandProps {
	brandId: number
	refresh: () => Promise<void>
}
