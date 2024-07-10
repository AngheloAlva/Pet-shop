"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { updateOptionFormSchema } from "@/lib"
import { useForm } from "react-hook-form"
import { updateOption } from "@/actions"
import { z } from "zod"

import { DialogClose, Form, Input, Label, useToast } from "@/components/ui"
import GenericField from "../GenericField"

import type { Option } from "@prisma/client"

interface UpdateOptionFormProps {
	option: Option
	authId: string
	refresh: () => Promise<void>
}

export default function UpdateOptionForm({
	option,
	authId,
	refresh,
}: UpdateOptionFormProps): React.ReactElement {
	const { toast } = useToast()
	const form = useForm<z.infer<typeof updateOptionFormSchema>>({
		resolver: zodResolver(updateOptionFormSchema),
		defaultValues: {
			discount: option.discount,
			price: option.price,
			stock: option.stock,
		},
	})

	const onSubmit = async (values: z.infer<typeof updateOptionFormSchema>): Promise<void> => {
		try {
			await updateOption(option.id, {
				discount: Number(values.discount),
				price: Number(values.price),
				stock: Number(values.stock),
			})
			await refresh()
		} catch (error) {
			toast({
				title: "Error updating option",
				description: "An error occurred while updating the option, please try again later",
				duration: 3000,
				variant: "destructive",
			})
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-3 text-start">
				<div className="space-y-2">
					<Label>Option</Label>
					<Input disabled value={option.name} />
				</div>
				<GenericField
					control={form.control}
					name="price"
					label="Price"
					placeholder="0"
					type="number"
				/>
				<GenericField
					control={form.control}
					name="stock"
					label="Stock"
					placeholder="0"
					type="number"
				/>
				<GenericField
					control={form.control}
					name="discount"
					label="Discount"
					placeholder="0"
					type="number"
				/>

				<DialogClose className="col-span-2 inline-flex h-9 w-full items-center justify-center whitespace-nowrap rounded-md border border-input bg-background bg-blue-300 px-4 py-2 text-sm font-medium text-bg-100 shadow-sm transition-colors hover:bg-accent hover:bg-blue-400 hover:text-accent-foreground hover:text-bg-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
					Update
				</DialogClose>
			</form>
		</Form>
	)
}
