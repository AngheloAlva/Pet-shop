"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useEffect } from "react"

import type { z } from "zod"
import { Address } from "@prisma/client"
import { addressFormSchema } from "@/lib"

interface UserFormResponse {
	form: any
}

export const useAddressForm = (address: Address | undefined): UserFormResponse => {
	const form = useForm<z.infer<typeof addressFormSchema>>({
		resolver: zodResolver(addressFormSchema),
		defaultValues: {
			commune: address?.commune ?? "",
			isApartment: address?.isApartment ?? false,
			name: address?.name ?? "",
			number: address?.number ?? "",
			region: address?.region ?? "",
			street: address?.street ?? "",
			zipCode: address?.zipCode ?? "",
			apartmentNumber: address?.apartmentNumber ?? "",
		},
	})

	useEffect(() => {
		if (address !== undefined) {
			form.reset({
				commune: address.commune,
				isApartment: address.isApartment,
				name: address.name,
				number: address.number,
				region: address.region,
				street: address.street,
				zipCode: address.zipCode,
				apartmentNumber: address.apartmentNumber ?? "",
			})
		}
	}, [address, form, form.reset])

	return {
		form,
	}
}
