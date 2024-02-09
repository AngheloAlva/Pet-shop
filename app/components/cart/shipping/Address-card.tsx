import { FaLocationDot, FaMountainCity, FaStreetView, FaTreeCity } from 'react-icons/fa6'
import { Card, CardContent, CardTitle } from '../../ui/card'
import EditAddressDialog from './Edit-address-dialog'
import AddressCardItem from './Address-card-item'

import type { Address } from '@/types/user/address.types'

export interface AddressCardProps {
  address: Address
  authId: string
  refetchUser: () => Promise<void>
}

function AddressCard (
  { address, authId, refetchUser }: AddressCardProps
): React.ReactElement {
  return (
    <Card>
      <CardContent>
        <CardTitle className='mt-5 mb-2 text-xl flex items-center justify-between text-blue-500 font-bold'>
          {address.name}
          <EditAddressDialog
            address={address}
            authId={authId}
            refetchUser={refetchUser}
          />
        </CardTitle>

        <div className='text-text-200 flex-col flex gap-1'>
          <AddressCardItem
            icon={<FaStreetView />}
            title='Street'
            value={
              `${address.street} ${address.number}
              ${address.isApartment ? `Apt. ${address.apartmentNumber}` : ''}`
            }
          />
          <AddressCardItem
            icon={<FaMountainCity />}
            title='Region'
            value={address.region}
          />
          <AddressCardItem
            icon={<FaTreeCity />}
            title='Commune'
            value={address.commune}
          />
          <AddressCardItem
            icon={<FaLocationDot />}
            title='ZipCode'
            value={address.zipCode}
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default AddressCard
