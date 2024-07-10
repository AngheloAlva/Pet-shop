import { activateBrand } from "@/actions"
import {
	useToast,
	AlertDialog,
	AlertDialogTitle,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTrigger,
	AlertDialogDescription,
} from "@/components/ui"

function AlertRestoreBrand({
	brandId,
	refresh,
}: {
	brandId: number
	refresh: () => Promise<void>
}): React.ReactElement {
	const { toast } = useToast()

	const handleRestore = async (): Promise<void> => {
		try {
			await activateBrand(brandId)
			await refresh()
			toast({
				title: "Brand restored",
				description: "The brand was restored successfully",
				duration: 3000,
			})
		} catch (error) {
			toast({
				title: "Error",
				description: "An error occurred while restoring the brand",
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
						This action restore the Brand.
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

export default AlertRestoreBrand
