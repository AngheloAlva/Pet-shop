import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useEffect } from "react"

import type { z } from "zod"
import { User } from "@prisma/client"
import { userFormSchema } from "@/lib"

interface UserFormResponse {
	form: any
}

export const useUserForm = ({ user }: { user: User }): UserFormResponse => {
	const form = useForm<z.infer<typeof userFormSchema>>({
		resolver: zodResolver(userFormSchema),
		defaultValues: {
			lastName: user?.lastName,
			name: user?.name,
			rut: user?.rut,
		},
	})

	useEffect(() => {
		if (user != null) {
			form.reset({
				lastName: user.lastName ?? "",
				name: user.name ?? "",
				rut: user.rut ?? "",
			})
		}
	}, [user, form.reset, form])

	return {
		form,
	}
}
