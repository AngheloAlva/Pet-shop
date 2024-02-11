import { petTypes } from '@/app/lib/consts'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../ui/select'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../ui/form'

import type { Control } from 'react-hook-form'

function PetTypeSelectField (
  { control }: { control: Control<any> }
): React.ReactElement {
  return (
    <FormField
      control={control}
      name="petType"
      render={({ field }) => (
        <FormItem>
          <FormLabel>PetType</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a Pet Type" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {
                petTypes.map((petType) => (
                  <SelectItem key={petType} value={petType}>
                    {petType}
                  </SelectItem>
                ))
              }
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default PetTypeSelectField
