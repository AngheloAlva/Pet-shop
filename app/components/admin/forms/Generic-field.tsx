import { Input } from '../../ui/input'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../../ui/form'

interface GenericFieldProps {
  control: any
  name: string
  label: string
  placeholder: string
}

function GenericField (
  { control, label, name, placeholder }: GenericFieldProps
): React.ReactElement {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default GenericField
