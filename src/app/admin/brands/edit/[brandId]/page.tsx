import { createBrandSchema } from "@/lib"
import { getBrandById } from "@/actions"

import { UpdateBrandForm } from "@/components/forms"

import type { z } from "zod"

async function UpdateBrandPage({
	params,
}: {
	params: { brandId: string }
}): Promise<React.ReactElement> {
	const { ok, data } = await getBrandById(parseInt(params.brandId))

	if (!ok || data == null) {
		return <div>Brand not found</div>
	}

	const defaultValues: z.infer<typeof createBrandSchema> = {
		image: data.image,
		name: data.name,
		slug: data.slug,
	}

	return (
		<main className="md flex flex-col gap-7 px-5 pb-20 pt-4 text-text-100">
			<div>
				<h1 className="text-3xl font-bold">Update Brand</h1>
				<p className="text-muted-foreground">Only change the fields you want to update.</p>
			</div>

			<UpdateBrandForm defaultValues={defaultValues} brandId={parseInt(params.brandId)} />
		</main>
	)
}

export default UpdateBrandPage
