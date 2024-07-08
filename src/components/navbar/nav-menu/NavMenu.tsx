import { getCategories } from "@/actions"
import { petTypes } from "@/lib"

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuContent,
	NavigationMenuTrigger,
} from "@/components/ui"

export default async function NavMenu(): Promise<React.ReactElement> {
	const { categories } = await getCategories({
		isAvailable: true,
		limit: 100,
		page: 1,
	})

	return (
		<NavigationMenu>
			<NavigationMenuList className="w-[80vw] lg:w-[65vw] xl:w-[50vw]">
				{petTypes.map((petType, index) => {
					return (
						<NavigationMenuItem key={index}>
							<NavigationMenuTrigger className="w-full">
								{petType.replace("_", " ")}
							</NavigationMenuTrigger>
							<NavigationMenuContent className="min-w-[80vw] lg:min-w-[65vw] xl:min-w-[50vw]">
								<ul className="grid min-w-full grid-cols-2 gap-3 p-4">
									{categories &&
										categories
											.filter((category) => category.petType === petType)
											.map((category, index) => {
												return (
													<li key={index} className="flex flex-col">
														<NavigationMenuLink
															href={`/categories/${category.slug}`}
															className="font-semibold"
														>
															{category.name}
															<p className="line-clamp-2 font-light text-muted-foreground">
																{category.description}
															</p>
														</NavigationMenuLink>
													</li>
												)
											})}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
					)
				})}
			</NavigationMenuList>
		</NavigationMenu>
	)
}
