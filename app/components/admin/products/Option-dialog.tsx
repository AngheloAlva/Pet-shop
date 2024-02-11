import UpdateOptionForm from '../forms/option/Update-option-form'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../../ui/dialog'

import type { Option } from '@/types/shop/option.types'

interface OptionDialogProps {
  option: Option
  authId: string
  refresh: () => Promise<void>
}

function OptionDialog (
  { option, authId, refresh }: OptionDialogProps
): React.ReactElement {
  return (
    <Dialog>
      <DialogTrigger className='border bg-transparent h-8 border-input shadow-sm hover:bg-accent hover:text-accent-foreground rounded-md px-2 sm:px-3 text-xs w-fit py-1 hover:bg-white inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'>
        {option.name} - {option.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })} ({option.stock} stock)
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Edit option
          </DialogTitle>

          <UpdateOptionForm
            option={option}
            authId={authId}
            refresh={refresh}
          />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default OptionDialog
