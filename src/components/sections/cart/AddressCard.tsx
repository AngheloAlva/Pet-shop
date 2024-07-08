import { Card, CardContent, CardTitle } from "@/components/ui"
import { Address } from "@prisma/client"
import AddressCardItem from "./AddressCardItem"
import { FaLocationDot, FaMountainCity, FaStreetView, FaTreeCity } from "react-icons/fa6"
import EditAddressDialog from "./EditAddressDialog"

export interface AddressCardProps {
	address: Address
	authId: string
	refetchUser: () => Promise<void>
}

function AddressCard({ address, authId, refetchUser }: AddressCardProps): React.ReactElement {
	return (
		<Card>
			<CardContent>
				<CardTitle className="mb-2 mt-5 flex items-center justify-between text-xl font-bold text-blue-500">
					{address.name}
					<EditAddressDialog address={address} authId={authId} refetchUser={refetchUser} />
				</CardTitle>

				<div className="flex flex-col gap-1 text-text-200">
					<AddressCardItem
						icon={<FaStreetView />}
						title="Street"
						value={`${address.street} ${address.number}
              ${address.isApartment ? `Apt. ${address.apartmentNumber}` : ""}`}
					/>
					<AddressCardItem icon={<FaMountainCity />} title="Region" value={address.region} />
					<AddressCardItem icon={<FaTreeCity />} title="Commune" value={address.commune} />
					<AddressCardItem icon={<FaLocationDot />} title="ZipCode" value={address.zipCode} />
				</div>
			</CardContent>
		</Card>
	)
}

export default AddressCard
