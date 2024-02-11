/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import { updateOptionFormSchema } from '@/app/lib/schemas/udpate-option-form-schema'
import { updateOption } from '@/app/lib/api/shop/option'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { useToast } from '@/app/components/ui/use-toast'
import { Form } from '@/app/components/ui/form'
import GenericField from '../Generic-field'

import type { Option } from '@/types/shop/option.types'
import type { z } from 'zod'
import { DialogClose } from '@/app/components/ui/dialog'
import { Input } from '@/app/components/ui/input'
import { Label } from '@/app/components/ui/label'

interface UpdateOptionFormProps {
  option: Option
  authId: string
  refresh: () => Promise<void>
}

function UpdateOptionForm (
  { option, authId, refresh }: UpdateOptionFormProps
): React.ReactElement {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof updateOptionFormSchema>>({
    resolver: zodResolver(updateOptionFormSchema),
    defaultValues: {
      discount: option.discount,
      price: option.price,
      stock: option.stock
    }
  })

  const onSubmit = async (values: z.infer<typeof updateOptionFormSchema>): Promise<void> => {
    try {
      await updateOption(option.id, {
        discount: Number(values.discount),
        price: Number(values.price),
        stock: Number(values.stock),
        authId
      })
      await refresh()
    } catch (error) {
      toast({
        title: 'Error updating option',
        description: 'An error occurred while updating the option, please try again later',
        duration: 3000,
        variant: 'destructive'
      })
    }
  }

  return (
    <Form {...form}>
       <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-3 text-start">
        <div className='space-y-2'>
          <Label>Option</Label>
          <Input disabled value={option.name} />
        </div>
        <GenericField control={form.control} name="price" label="Price" placeholder='0' type='number' />
        <GenericField control={form.control} name="stock" label="Stock" placeholder='0' type='number' />
        <GenericField control={form.control} name="discount" label="Discount" placeholder='0' type='number' />

        <DialogClose className='col-span-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 w-full border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground bg-blue-300 hover:bg-blue-400 text-bg-100 hover:text-bg-100'>
          Update
        </DialogClose>
       </form>
    </Form>
  )
}

export default UpdateOptionForm
