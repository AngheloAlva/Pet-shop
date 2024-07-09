"use client"

import { userFormSchema } from "@/lib"
import { updateUser } from "@/actions"
import { User } from "@prisma/client"
import { useUserForm } from "@/hooks"
import { z } from "zod"

import { RutField } from "./RutFields"
import {
	Card,
	Form,
	Input,
	Button,
	FormItem,
	useToast,
	FormField,
	FormLabel,
	FormMessage,
	FormControl,
} from "../ui"

interface UserFormProps {
	user: User
	setIsButtonEnabled?: (enabled: boolean) => void
}

function UserForm({ user, setIsButtonEnabled }: UserFormProps): React.ReactElement {
	const { toast } = useToast()
	const { form } = useUserForm({ user })

	const onSubmit = async (data: z.infer<typeof userFormSchema>): Promise<void> => {
		try {
			await updateUser(user.id, data)

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

					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input placeholder="******" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<RutField
						name="rut"
						label="Rut"
						disabled={true}
						placeholder="Rut"
						control={form.control}
					/>

					<Button
						size={"lg"}
						type="submit"
						className="mt-4 bg-blue-400 hover:bg-blue-300 sm:col-span-2"
					>
						Update Information
					</Button>
				</form>
			</Form>
		</Card>
	)
}

export default UserForm
