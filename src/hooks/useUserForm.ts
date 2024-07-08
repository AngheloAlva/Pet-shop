"use client"

import { userFormSchema } from "@/lib"
import { User } from "@prisma/client"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"

interface UserFormResponse {
	form: any
}

const useUserForm = ({ user }: { user: User | null }): UserFormResponse => {
	const form = useForm<z.infer<typeof userFormSchema>>({
		resolver: zodResolver(userFormSchema),
		defaultValues: {
			lastName: user?.lastName ?? "",
			name: user?.name ?? "",
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

export default useUserForm
