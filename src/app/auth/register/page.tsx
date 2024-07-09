import { RegisterForm } from "@/components/auth"

export default function LoginPage(): React.ReactElement {
	return (
		<main className="flex min-h-dvh flex-col items-center justify-center px-6">
			<h1 className="mb-8 text-4xl">Iniciar sesión</h1>

			<RegisterForm />
		</main>
	)
}
