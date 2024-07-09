"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { cn, registerSchema } from "@/lib"
import { useForm } from "react-hook-form"
import { login, registerUser } from "@/actions"
import { es } from "date-fns/locale"
import { format } from "date-fns"
import { z } from "zod"

import { CalendarIcon } from "@radix-ui/react-icons"
import { RutField } from "../forms"
import {
	Form,
	Input,
	Button,
	Popover,
	useToast,
	FormItem,
	FormField,
	FormLabel,
	FormControl,
	FormMessage,
	PopoverTrigger,
	PopoverContent,
	CalendarWithYearPicker,
} from "../ui"

export default function RegisterForm(): React.ReactElement {
	const { toast } = useToast()

	const form = useForm<z.infer<typeof registerSchema>>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			rut: "",
			name: "",
			email: "",
			password: "",
			lastName: "",
			bornDate: new Date("2000-01-02"),
		},
	})

	const onSubmit = async (values: z.infer<typeof registerSchema>) => {
		const { ok } = await registerUser(values)

		if (!ok) {
			toast({
				title: "Error al iniciar sesión",
				description: "Verifica tus credenciales",
				variant: "destructive",
			})
			return
		}

		await login(values.email, values.password)

		window.location.replace("/")
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="grid w-full max-w-screen-md grid-cols-1 gap-4 sm:grid-cols-2"
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input type="text" placeholder="Name" {...field} />
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
							<FormLabel>Lastname</FormLabel>
							<FormControl>
								<Input type="text" placeholder="Lastname" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

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

				<RutField control={form.control} label="RUT" name="rut" placeholder="12.345.678-9" />

				<FormField
					control={form.control}
					name="bornDate"
					render={({ field }) => (
						<FormItem className="flex flex-col">
							<FormLabel>Fecha de nacimiento</FormLabel>
							<Popover>
								<PopoverTrigger asChild>
									<FormControl>
										<Button
											variant={"outline"}
											className={cn(
												"h-10 w-full pl-3 text-left font-normal",
												!field.value && "text-muted-foreground"
											)}
										>
											{field.value ? (
												format(field.value, "PPP", { locale: es })
											) : (
												<span>Escoge una fecha</span>
											)}
											<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
										</Button>
									</FormControl>
								</PopoverTrigger>
								<PopoverContent className="w-auto p-0" align="start">
									<CalendarWithYearPicker
										mode="single"
										selected={field.value}
										onSelect={field.onChange}
										disabled={(date) => date > new Date()}
										initialFocus
									/>
								</PopoverContent>
							</Popover>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button className="mt-2 sm:col-span-2" size={"lg"} type="submit">
					Iniciar sesión
				</Button>
			</form>
		</Form>
	)
}
