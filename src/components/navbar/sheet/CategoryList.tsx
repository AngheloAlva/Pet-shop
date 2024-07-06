import { getCategories } from "@/actions"
import { petTypes } from "@/lib"
import Link from "next/link"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui"

async function CategoryList(): Promise<React.ReactElement> {
	const { categories } = await getCategories({
		page: 1,
		limit: 100,
		isAvailable: true,
	})

	return (
		<div className="text-text-100 flex flex-col gap-2">
			<Accordion type="single" collapsible>
				{petTypes.map((petType, index) => {
					return (
						<AccordionItem value={index.toString()} key={index}>
							<AccordionTrigger>{petType}</AccordionTrigger>
							<AccordionContent>
								<ul className="flex flex-col gap-4">
									{categories &&
										categories
											.filter((category) => category.petType === petType)
											.map((category, index) => {
												return (
													<li key={index}>
														<Link
															className="pl-2 hover:underline"
															href={`/categories/${category.slug}`}
														>
															{category.name}
														</Link>
													</li>
												)
											})}
								</ul>
							</AccordionContent>
						</AccordionItem>
					)
				})}
			</Accordion>
		</div>
	)
}

export default CategoryList
