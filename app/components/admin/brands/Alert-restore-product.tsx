/* eslint-disable @typescript-eslint/no-misused-promises */

import { activateBrand } from '@/app/lib/api/shop/brand'
import { useToast } from '../../ui/use-toast'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '../../ui/alert-dialog'

function AlertRestoreBrand (
  { brandId, authId, refresh }: { brandId: number, authId: string, refresh: () => Promise<void> }
): React.ReactElement {
  const { toast } = useToast()

  const handleRestore = async (): Promise<void> => {
    try {
      await activateBrand(brandId, authId)
      await refresh()
      toast({
        title: 'Brand restored',
        description: 'The brand was restored successfully',
        duration: 3000
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred while restoring the brand',
        duration: 3000,
        variant: 'destructive'
      })
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger className='inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs'>
        Restore
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription className='text-pretty'>
            This action restore the Brand.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleRestore}>
            Restore
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertRestoreBrand
