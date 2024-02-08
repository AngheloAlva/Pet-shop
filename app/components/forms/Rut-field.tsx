import { formatRut } from '@/app/helpers/formatRut'

import { Input } from '../ui/input'
import {
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage
} from '../ui/form'

interface FormFieldProps {
  label: string
  control: any
  name: string
  placeholder: string
}

function RutField ({
  label, control, name, placeholder
}: FormFieldProps): React.ReactElement {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const { onChange, ...restFieldProps } = field

        return (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
                onChange={(e) => {
                  field.onChange(formatRut(e.target.value))
                }}
                placeholder={placeholder}
                {...restFieldProps}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )
      }}
      />
  )
}

export default RutField
