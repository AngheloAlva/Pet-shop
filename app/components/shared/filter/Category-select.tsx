import useCategories from '@/app/hooks/useCategories'
import { cn } from '@/app/lib/utils'

import { Button } from '../../ui/button'
import { Label } from '../../ui/label'
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent
} from '@/app/components/ui/select'

import type { FilterProps } from '@/types/shared/FiltersProps'

function CategorySelect (
  { setFilters, filters, className }: FilterProps
): React.ReactElement {
  const { categories } = useCategories({
    isAvailable: true,
    limit: 100,
    page: 1
  })

  const handleCategoryChange = (value: string): void => {
    setFilters({
      ...filters,
      categorySlug: value
    })
  }

  const clearCategory = (): void => {
    setFilters({
      ...filters,
      categorySlug: undefined
    })
  }

  return (
    <div>
      <Label>Category</Label>
      <div className={cn('flex items-center justify-between gap-2', className)}>
        <Select onValueChange={handleCategoryChange} defaultValue={filters.categorySlug}>
          <SelectTrigger>
            <SelectValue placeholder='Select a category' />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.slug}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button onClick={clearCategory} variant="secondary" className='w-1/4 lg:w-1/2'>
          Clear
        </Button>
      </div>
    </div>
  )
}

export default CategorySelect
