import AddressForm from '../../forms/Address-form'
import { Button } from '../../ui/button'
import AddressCard from './Address-card'

import type { Address } from '@/types/user/address.types'

interface AddressSectionProps {
  userId: string
  address: Address | null
  refetchUser: () => Promise<void>
  setIsButtonEnabled: (isEnabled: boolean) => void
}

function AddressSection (
  { userId, address, setIsButtonEnabled, refetchUser }: AddressSectionProps
): React.ReactElement {
  return (
    <div>
      <h2 className='text-2xl font-bold mb-2'>Shipping address</h2>
      {
        address === null
          ? <AddressForm
              authId={userId ?? ''}
              setIsButtonEnabled={setIsButtonEnabled}
              address={address}
              refetchUser={refetchUser}
            >
              <Button type='submit' className='w-full' size={'lg'}>
                Save
              </Button>
            </AddressForm>
          : <AddressCard key={address.id} address={address} authId={userId} refetchUser={refetchUser} />
      }
    </div>
  )
}

export default AddressSection
