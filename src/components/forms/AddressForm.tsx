"use client"

import { createAddress, updateAddress } from "@/actions"
import { addressFormSchema } from "@/lib"
import { useAddressForm } from "@/hooks"
import { z } from "zod"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import RegionComuneSelect from "./RegionComuneSelect"
import IsApartmentFields from "./IsApartmentFields"
import { Card, Input, useToast } from "../ui"
import { Address } from "@prisma/client"
import { useCheckoutStore } from "@/store"

interface AddressFormProps {
	userId: string
	address: Address | undefined
	children: React.ReactNode
	setIsButtonEnabled?: (enabled: boolean) => void
}

function AddressForm({
	userId,
	address,
	setIsButtonEnabled,
	children,
}: AddressFormProps): React.ReactElement {
	const { toast } = useToast()
	const { form } = useAddressForm(address)
	const setHaveAddress = useCheckoutStore((state) => state.setHaveAddress)

	const onSubmit = async (data: z.infer<typeof addressFormSchema>): Promise<void> => {
		console.log("data", data)
		try {
			if (!address) {
				const { ok, address } = await createAddress({
					...data,
					userId,
				})

				if (!ok) {
					toast({
						title: "Error",
						description: "Error updating user information",
						duration: 3000,
						variant: "destructive",
					})
					return
				}

				setHaveAddress(true)
				toast({
					title: "Success",
					description: `New address: ${address?.name} created`,
					duration: 3000,
				})
			} else {
				const { ok } = await updateAddress(address.id, {
					...data,
				})

				if (!ok) {
					toast({
						title: "Error",
						description: "Error updating user information",
						duration: 3000,
						variant: "destructive",
					})
					return
				}

				setHaveAddress(true)
				toast({
					title: "Success",
					description: "User information updated",
					duration: 3000,
				})
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
									<Input placeholder="Ej: House" {...field} />
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

					<FormField
						control={form.control}
						name="phone"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Phone</FormLabel>
								<FormControl>
									<Input placeholder="123456789" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="hidden sm:col-span-1 sm:block" />

					<IsApartmentFields form={form} />

					{children}
				</form>
			</Form>
		</Card>
	)
}

export default AddressForm
