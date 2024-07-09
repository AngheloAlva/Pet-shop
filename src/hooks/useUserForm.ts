"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { userFormSchema } from "@/lib"
import { useEffect } from "react"
import { z } from "zod"

import type { User } from "@prisma/client"

interface UserFormResponse {
	form: any
}

export const useUserForm = ({ user }: { user: User }): UserFormResponse => {
	const form = useForm<z.infer<typeof userFormSchema>>({
		resolver: zodResolver(userFormSchema),
		defaultValues: {
			lastName: user.lastName ?? "",
			name: user.name ?? "",
			rut: user.rut,
			password: "",
		},
	})

	useEffect(() => {
		if (user != null) {
			form.reset({
				lastName: user.lastName ?? "",
				name: user.name ?? "",
				password: "",
			})
		}
	}, [user, form.reset, form])

	return {
		form,
	}
}
