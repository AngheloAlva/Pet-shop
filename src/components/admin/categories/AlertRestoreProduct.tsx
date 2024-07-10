import { activateCategory } from "@/actions"
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

function AlertRestoreCategory({
	categoryId,
	refresh,
}: {
	categoryId: number
	refresh: () => Promise<void>
}): React.ReactElement {
	const { toast } = useToast()

	const handleRestore = async (): Promise<void> => {
		try {
			await activateCategory(categoryId)
			await refresh()
			toast({
				title: "Category restored",
				description: "The category was restored successfully",
				duration: 3000,
			})
		} catch (error) {
			toast({
				title: "Error",
				description: "An error occurred while restoring the category",
				duration: 3000,
				variant: "destructive",
			})
		}
	}

	return (
		<AlertDialog>
			<AlertDialogTrigger className="inline-flex h-8 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-3 text-xs font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
				Restore
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you sure?</AlertDialogTitle>
					<AlertDialogDescription className="text-pretty">
						This action restore the Category.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction onClick={handleRestore}>Restore</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}

export default AlertRestoreCategory
