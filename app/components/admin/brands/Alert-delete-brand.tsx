/* eslint-disable @typescript-eslint/no-misused-promises */

import { deleteBrand } from '@/app/lib/api/shop/brand'

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

function AlertDeleteBrand (
  { brandId, authId, refresh }: AlertDeleteBrandProps
): React.ReactElement {
  const { toast } = useToast()

  const handleDelete = async (): Promise<void> => {
    try {
      await deleteBrand(brandId, authId)
      await refresh()
      toast({
        title: 'Brand deleted',
        description: 'The brand was deleted successfully',
        duration: 3000
      })
    } catch (error) {
      console.log(error)
      toast({
        title: 'Error',
        description: 'An error occurred while deleting the brand',
        duration: 3000,
        variant: 'destructive'
      })
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger className='bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 h-8 rounded-md px-3 text-xs inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'>
        Delete
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription className='text-pretty'>
            This action deletes the brand temporarily. You can restore it later.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertDeleteBrand

interface AlertDeleteBrandProps {
  brandId: number
  authId: string
  refresh: () => Promise<void>
}
