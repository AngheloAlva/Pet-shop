"use client"

import AddressForm from "@/components/forms/AddressForm"
import { Button, useToast } from "@/components/ui"
import { Address } from "@prisma/client"
import AddressCard from "./AddressCard"
import { useEffect, useState } from "react"
import { getAddressByUser } from "@/actions"

interface AddressSectionProps {
	userId: string
}

function AddressSection({ userId }: AddressSectionProps): React.ReactElement {
	const [address, setAddress] = useState<Address | undefined>(undefined)
	const { toast } = useToast()

	useEffect(() => {
		const fetchAddress = async (): Promise<void> => {
			const { ok, address, message } = await getAddressByUser(userId)

			if (!ok) {
				toast({
					title: "Error",
					description: message,
					variant: "destructive",
				})
			}

			if (address !== undefined) {
				setAddress(address[0])
			}
		}

		void fetchAddress()
	}, [toast, userId])

	return (
		<div className="w-full md:w-2/3">
			<h2 className="mb-2 text-2xl font-bold">Shipping address</h2>
			{address === undefined ? (
				<AddressForm userId={userId} address={address}>
					<Button type="submit" className="w-full bg-blue-400 hover:bg-blue-300" size={"lg"}>
						Save
					</Button>
				</AddressForm>
			) : (
				<AddressCard key={address.id} address={address} authId={userId} />
			)}
		</div>
	)
}

export default AddressSection
