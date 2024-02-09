/* eslint-disable @typescript-eslint/no-misused-promises */

'use client'

import { createAddress, updateAddress } from '@/app/lib/api/user/address'
import useAddressForm from '@/app/hooks/useAddressForm'

import RegionComuneSelect from './Region-Comune-select'
import IsApartmentFields from './Is-apartment-fields'
import { useToast } from '../ui/use-toast'
import { Input } from '../ui/input'
import { Card } from '../ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/app/components/ui/form'

import type { addressFormSchema } from '@/app/lib/schemas/address-form-schema'
import type { Address } from '@/types/user/address.types'
import type { z } from 'zod'

interface AddressFormProps {
  authId: string
  address: Address | null
  isUpdate?: boolean
  children: React.ReactNode
  refetchUser?: () => Promise<void>
  setIsButtonEnabled?: (enabled: boolean) => void
}

function AddressForm (
  { authId, setIsButtonEnabled, address, isUpdate = false, refetchUser, children }: AddressFormProps
): React.ReactElement {
  const { toast } = useToast()
  const { form } = useAddressForm(address)

  const onSubmit = async (data: z.infer<typeof addressFormSchema>): Promise<void> => {
    try {
      if (authId === '') {
        toast({
          title: 'Error',
          description: 'Error updating user information. Please try again later',
          duration: 3000,
          variant: 'destructive'
        })
        return
      }

      if (!isUpdate) {
        await createAddress({
          authId,
          ...data
        })

        if (refetchUser !== undefined) {
          await refetchUser()
        }
      } else {
        if (address?.id === undefined) return

        await updateAddress(address.id, {
          ...data
        })

        if (refetchUser !== undefined) {
          await refetchUser()
        }
      }

      if (setIsButtonEnabled !== undefined) {
        setIsButtonEnabled(true)
      }

      toast({
        title: 'Success',
        description: 'User information updated',
        duration: 3000
      })
    } catch (error) {
      console.log('Error updating user information', error)
      toast({
        title: 'Error',
        description: 'Error updating user information',
        duration: 3000,
        variant: 'destructive'
      })
    }
  }

  return (
    <Card className='py-4 px-6'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <RegionComuneSelect form={form} />

          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Street</FormLabel>
                <FormControl>
                  <Input placeholder="Street" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number</FormLabel>
                <FormControl>
                  <Input placeholder="Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zip Code</FormLabel>
                <FormControl>
                  <Input placeholder="Zip Code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <IsApartmentFields form={form} />

          {children}
        </form>
      </Form>
    </Card>
  )
}

export default AddressForm
