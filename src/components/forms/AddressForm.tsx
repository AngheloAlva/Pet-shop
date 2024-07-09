"use client"

import { createAddress, getAddressByUser, updateAddress } from "@/actions"
import { addressFormSchema } from "@/lib"
import { useAddressForm } from "@/hooks"
import { z } from "zod"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import RegionComuneSelect from "./RegionComuneSelect"
import IsApartmentFields from "./IsApartmentFields"
import { Card, Input, useToast } from "../ui"
import { Address } from "@prisma/client"

interface AddressFormProps {
	userId: string
	address: Address | undefined
	isUpdate?: boolean
	children: React.ReactNode
	refetchUser?: () => Promise<void>
	setIsButtonEnabled?: (enabled: boolean) => void
}

function AddressForm({
	userId,
	address,
	setIsButtonEnabled,
	isUpdate = false,
	refetchUser,
	children,
}: AddressFormProps): React.ReactElement {
	const { toast } = useToast()
	const { form } = useAddressForm(address)

	const onSubmit = async (data: z.infer<typeof addressFormSchema>): Promise<void> => {
		try {
			if (!userId) {
				toast({
					title: "Error",
					description: "Error updating user information. Please try again later",
					duration: 3000,
					variant: "destructive",
				})
				return
			}

			if (!isUpdate) {
				await createAddress({
					...data,
					userId,
				})

				if (refetchUser !== undefined) {
					await refetchUser()
				}
			} else {
				if (address?.id === undefined) return

				await updateAddress(address.id, {
					...data,
				})

				if (refetchUser !== undefined) {
					await refetchUser()
				}
			}

			if (setIsButtonEnabled !== undefined) {
				setIsButtonEnabled(true)
			}

			toast({
				title: "Success",
				description: "User information updated",
				duration: 3000,
			})
		} catch (error) {
			toast({
				title: "Error",
				description: "Error updating user information",
				duration: 3000,
				variant: "destructive",
			})
		}
	}

	return (
		<Card className="px-6 py-4">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="grid grid-cols-1 gap-4 sm:grid-cols-2"
				>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Address Name</FormLabel>
								<FormControl>
									<Input placeholder="Name" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<RegionComuneSelect form={form} />

					<FormField
						control={form.control}
						name="street"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Street</FormLabel>
								<FormControl>
									<Input placeholder="Street" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="number"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Number</FormLabel>
								<FormControl>
									<Input placeholder="Number" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="zipCode"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Zip Code</FormLabel>
								<FormControl>
									<Input placeholder="Zip Code" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<IsApartmentFields form={form} />

					{children}
				</form>
			</Form>
		</Card>
	)
}

export default AddressForm
