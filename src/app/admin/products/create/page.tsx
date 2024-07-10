import { CreateProductForm } from "@/components/forms/"

function CreateProductPage(): React.ReactElement {
	return (
		<main className="md flex flex-col gap-7 px-5 pb-20 pt-4 text-text-100">
			<div>
				<h1 className="text-3xl font-bold">Create Product</h1>
				<p className="text-muted-foreground">All fields are required</p>
			</div>
			<CreateProductForm />
		</main>
	)
}

export default CreateProductPage
