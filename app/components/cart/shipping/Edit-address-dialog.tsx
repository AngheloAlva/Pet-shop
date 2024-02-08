import AddressForm from '../../forms/Address-form'
import { Button } from '../../ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger
} from '@/app/components/ui/dialog'

import type { AddressCardProps } from './Address-card'

function EditAddressDialog (
  { address, authId, refetchUser }: AddressCardProps
): React.ReactElement {
  return (
    <Dialog>
      <DialogTrigger className='border border-input rounded-lg px-4 py-1 text-sm hover:bg-bg-200'>
        Edit
      </DialogTrigger>
      <DialogContent>
        <h2 className='text-2xl font-bold mb-1'>Edit address</h2>
        <AddressForm
          refetchUser={refetchUser}
          authId={authId}
          setIsButtonEnabled={() => {}}
          address={address}
          isUpdate={true}
        >
          <DialogClose>
            <Button type='submit' className='w-full' size={'lg'}>
              Save
            </Button>
          </DialogClose>
        </AddressForm>
      </DialogContent>
    </Dialog>

  )
}

export default EditAddressDialog
