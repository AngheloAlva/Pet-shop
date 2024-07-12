import { Toaster } from "@/components/ui"

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			{children}
			<Toaster />
		</>
	)
}
