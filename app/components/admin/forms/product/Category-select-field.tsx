import useCategories from '@/app/hooks/shop/useCategories'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../ui/select'
import { FormControl, FormField, FormItem, FormLabel } from '../../../ui/form'

import type { Control } from 'react-hook-form'

function CategorySelectField (
  { control }: { control: Control<any> }
): React.ReactElement {
  const { categories } = useCategories({
    isAvailable: true,
    limit: 100,
    page: 1
  })

  return (
    <FormField
      control={control}
      name="categoryId"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Category</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {
                categories.map((category) => (
                  <SelectItem key={category.id} value={category.id.toString()}>
                    {category.name}
                  </SelectItem>
                ))
              }
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  )
}

export default CategorySelectField
