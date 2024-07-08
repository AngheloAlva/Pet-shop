interface DescriptionSectionProps {
	description: string
}

export default function DescriptionSection({
	description,
}: DescriptionSectionProps): React.ReactElement {
	const renderDescription = (description: string): React.ReactElement[] => {
		return description.split("\\n").map((section, index) => (
			<p key={index} className="text-sm">
				{section}
			</p>
		))
	}

	return (
		<section className="flex flex-col gap-4 text-text-100 lg:pt-10">
			<h2 className="text-xl font-bold">Description</h2>
			{(JSON.parse(description) as Array<{ title: string; content: string }>).map(
				(section, index) => (
					<div key={index} className="flex flex-col gap-2">
						<h3 className="text-md font-bold">{section.title}</h3>
						<div className="space-y-1 text-sm">{renderDescription(section.content)}</div>
					</div>
				)
			)}
		</section>
	)
}
