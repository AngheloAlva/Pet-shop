import { Button, Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui"
import { AddressForm } from "@/components/forms"

import type { Address } from "@prisma/client"

function EditAddressDialog({ address, authId }: AddressCardProps): React.ReactElement {
	return (
		<Dialog>
			<DialogTrigger className="rounded-lg border border-input px-4 py-1 text-sm text-text-200 hover:bg-bg-200">
				Edit
			</DialogTrigger>
			<DialogContent>
				<h2 className="mb-1 text-2xl font-bold">Edit address</h2>
				<AddressForm userId={authId} setIsButtonEnabled={() => {}} address={address}>
					<DialogClose>
						<Button type="submit" className="w-full bg-blue-400 hover:bg-blue-300" size={"lg"}>
							Save
						</Button>
					</DialogClose>
				</AddressForm>
			</DialogContent>
		</Dialog>
	)
}

export default EditAddressDialog

interface AddressCardProps {
	address: Address
	authId: string
}
