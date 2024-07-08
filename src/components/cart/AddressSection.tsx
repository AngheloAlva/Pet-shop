import AddressForm from "@/components/forms/AddressForm"
import { Button } from "@/components/ui"
import { Address } from "@prisma/client"
import AddressCard from "./AddressCard"

interface AddressSectionProps {
	userId: string
	address: Address | null
	refetchUser: () => Promise<void>
	setIsButtonEnabled: (isEnabled: boolean) => void
}

function AddressSection({
	userId,
	address,
	setIsButtonEnabled,
	refetchUser,
}: AddressSectionProps): React.ReactElement {
	return (
		<div className="w-full md:w-2/3">
			<h2 className="mb-2 text-2xl font-bold">Shipping address</h2>
			{address === null ? (
				<AddressForm
					authId={userId ?? ""}
					setIsButtonEnabled={setIsButtonEnabled}
					address={address}
					refetchUser={refetchUser}
				>
					<Button type="submit" className="w-full bg-blue-400 hover:bg-blue-300" size={"lg"}>
						Save
					</Button>
				</AddressForm>
			) : (
				<AddressCard key={address.id} address={address} authId={userId} refetchUser={refetchUser} />
			)}
		</div>
	)
}

export default AddressSection
