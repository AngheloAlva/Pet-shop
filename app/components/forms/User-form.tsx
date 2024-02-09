/* eslint-disable @typescript-eslint/no-misused-promises */

'use client'

import { updateUser } from '@/app/lib/api/user/user'
import useUserForm from '@/app/hooks/useUserForm'

import { Button } from '@/app/components/ui/button'
import { useToast } from '../ui/use-toast'
import { Input } from '../ui/input'
import { Card } from '../ui/card'
import RutField from './Rut-field'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/app/components/ui/form'

import type { userFormSchema } from '@/app/lib/schemas/user-form-schema'
import type { User } from '@/types/user/user.types'
import type { z } from 'zod'

interface UserFormProps {
  user: User | null
  authId: string
  setIsButtonEnabled?: (enabled: boolean) => void
}

function UserForm (
  { user, authId, setIsButtonEnabled }: UserFormProps
): React.ReactElement {
  const { toast } = useToast()
  const { form } = useUserForm({ user })

  const onSubmit = async (data: z.infer<typeof userFormSchema>): Promise<void> => {
    try {
      await updateUser(authId, data)
      if (setIsButtonEnabled !== undefined) {
        setIsButtonEnabled(true)
      }

      toast({
        title: 'Success',
        description: 'User information updated',
        duration: 3000
      })
    } catch (error) {
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
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Last Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <RutField label='Rut' control={form.control} name='rut' placeholder='Rut' />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Phone" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className='mt-4'>
            Update Information
          </Button>
        </form>
      </Form>
    </Card>
  )
}

export default UserForm
