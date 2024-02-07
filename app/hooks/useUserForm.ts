import { userFormSchema } from '../lib/schemas/user-form-shchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

import type { User } from '@/types/user/user.types'
import type { z } from 'zod'

interface UserFormResponse {
  form: any
}

const useUserForm = (
  { user }: { user: User | null }
): UserFormResponse => {
  const form = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      lastName: user?.lastName ?? '',
      name: user?.name ?? '',
      phone: user?.phone ?? '',
      rut: user?.rut ?? ''
    }
  })

  useEffect(() => {
    if (user != null) {
      form.reset({
        lastName: user.lastName ?? '',
        name: user.name ?? '',
        phone: user.phone ?? '',
        rut: user.rut ?? ''
      })
    }
  }, [user, form.reset])

  return {
    form
  }
}

export default useUserForm
