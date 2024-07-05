import { nunito } from "@/config/fonts"
import "./globals.css"

import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Pet shop",
	description:
		"A pet shop for all common pets and exotic animals. We have everything you need to take care of your pet, from food to medicine and toys.",
	keywords:
		"pet shop, pets, animals, food, medicine, toys, exotic animals, common pets, dogs, cats, birds, fish, reptiles, rodents, rabbits, hamsters, guinea pigs, ferrets, chinchillas, hedgehogs",
	category: "Pets",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={nunito.className}>{children}</body>
		</html>
	)
}
