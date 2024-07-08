"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Button, Card, Input, useToast } from "../ui"
import useUserForm from "@/hooks/useUserForm"
import { z } from "zod"
import { userFormSchema } from "@/lib"
import { updateUser } from "@/actions"
import { User } from "@prisma/client"
import { RutField } from "./RutFields"

interface UserFormProps {
	user: User | null
	authId: string
	setIsButtonEnabled?: (enabled: boolean) => void
}

function UserForm({ user, authId, setIsButtonEnabled }: UserFormProps): React.ReactElement {
	const { toast } = useToast()
	const { form } = useUserForm({ user })

	const onSubmit = async (data: z.infer<typeof userFormSchema>): Promise<void> => {
		try {
			await updateUser(authId, data)
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
					className="grid grid-cols-1 gap-4 md:grid-cols-2"
				>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input placeholder="Name" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="lastName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Last Name</FormLabel>
								<FormControl>
									<Input placeholder="Last Name" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<RutField label="Rut" control={form.control} name="rut" placeholder="Rut" />

					<FormField
						control={form.control}
						name="phone"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Phone</FormLabel>
								<FormControl>
									<Input placeholder="Phone" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button type="submit" className="mt-4 bg-blue-400 hover:bg-blue-300">
						Update Information
					</Button>
				</form>
			</Form>
		</Card>
	)
}

export default UserForm
