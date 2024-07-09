import Image from "next/image"
import Link from "next/link"

import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6"

const catalogList = {
	title: "Catalog",
	links: [
		{ title: "For Dogs", href: "/pets/dog" },
		{ title: "For Cats", href: "/pets/cat" },
		{ title: "For Birds", href: "/pets/birds" },
		{ title: "For Fish", href: "/pets/fish" },
		{ title: "For Small pets", href: "/pets/small_pets" },
		{ title: "For Reptiles", href: "/pets/reptiles" },
	],
}

const socialMedia = {
	title: "Social Media",
	links: [
		{
			title: (
				<>
					<FaFacebook /> Facebook
				</>
			),
			href: "https://www.facebook.com",
		},
		{
			title: (
				<>
					<FaInstagram /> Instagram
				</>
			),
			href: "https://www.instagram.com",
		},
		{
			title: (
				<>
					<FaXTwitter /> Twitter
				</>
			),
			href: "https://www.twitter.com",
		},
	],
}

export default function Footer(): React.ReactElement {
	const year = new Date().getFullYear()

	return (
		<footer className="flex min-h-96 flex-col items-center gap-14 bg-text-100 px-10 py-8 text-bg-100 sm:gap-0 sm:px-20 sm:py-14 lg:px-32 lg:py-20 xl:px-40 xl:py-24">
			<div className="flex w-full max-w-[1900px] flex-col justify-between gap-14 sm:flex-row">
				<div className="flex w-full items-end justify-between sm:min-h-full sm:w-auto sm:flex-col sm:items-start">
					<Image src={"/2.svg"} alt="Logo" width={150} height={100} className="w-36" />
				</div>

				<div className="grid grid-cols-2 gap-y-8 sm:grid-rows-2 lg:flex lg:gap-x-10 xl:gap-x-20 2xl:gap-x-32">
					<ul className="flex flex-col gap-1 sm:row-span-2">
						<li>
							<h3 className="mb-3 text-xl font-semibold">{catalogList.title}</h3>
						</li>
						{catalogList.links.map((link, index) => (
							<li key={index}>
								<Link href={link.href} className="hover:text-cream-500 hover:underline">
									{link.title}
								</Link>
							</li>
						))}
					</ul>

					<ul className="flex flex-col gap-1">
						<li>
							<h3 className="mb-3 text-xl font-semibold">Contact Us</h3>
						</li>
						<li>Phone: 123-456-7890</li>
						<li>Email: petshop@petshop.com</li>
					</ul>

					<ul className="flex flex-col gap-1">
						<li>
							<h3 className="mb-3 text-xl font-semibold">{socialMedia.title}</h3>
						</li>
						{socialMedia.links.map((link, index) => (
							<li key={index}>
								<Link
									href={link.href}
									className="flex items-center gap-1 hover:text-cream-500 hover:underline"
								>
									{link.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className="flex w-full max-w-[1900px] items-start justify-end sm:items-end sm:justify-between">
				<Image
					src={"/footer/footer-image.png"}
					alt="Footer Image"
					width={200}
					height={100}
					className="hidden h-full w-48 rounded-lg sm:block lg:w-60"
				/>
				<p className="text-end text-sm lg:text-base">© {year} PetShop. All rights reserved.</p>
			</div>
		</footer>
	)
}
