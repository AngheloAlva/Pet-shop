"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { authenticate } from "@/actions"
import { loginSchema } from "@/lib"
import { z } from "zod"

import {
	Form,
	Input,
	Button,
	useToast,
	FormItem,
	FormField,
	FormLabel,
	FormControl,
	FormMessage,
} from "../ui"
import Link from "next/link"

export default function LoginForm(): React.ReactElement {
	const { toast } = useToast()

	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	})

	const onSubmit = async (values: z.infer<typeof loginSchema>) => {
		const success = await authenticate(values.email, values.password)

		if (success === "Error") {
			toast({
				title: "Error al iniciar sesión",
				description: "Verifica tus credenciales",
				variant: "destructive",
			})
			return
		}

		window.location.replace("/")
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="Email" {...field} />
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
								<Input type="password" placeholder="Password" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit">Login</Button>

				<p>
					Don&apos;t have an account?{" "}
					<Link href="/auth/register" className="font-semibold text-sky-600">
						Register
					</Link>
				</p>
			</form>
		</Form>
	)
}
