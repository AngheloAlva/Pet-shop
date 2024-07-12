import { RegisterForm } from "@/components/auth"

export default function RegisterPage(): React.ReactElement {
	return (
		<main className="flex min-h-dvh flex-col items-center justify-center px-6 py-20">
			<h1 className="mb-8 text-4xl">Register Form</h1>

			<RegisterForm />
		</main>
	)
}
