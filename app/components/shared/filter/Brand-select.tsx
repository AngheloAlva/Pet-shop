import useBrands from '@/app/hooks/useBrands'

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

function BrandSelect (
  { setFilters, filters }: FilterProps
): React.ReactElement {
  const { brands } = useBrands({
    isAvailable: true,
    limit: 100,
    page: 1
  })

  const handleBrandChange = (value: string): void => {
    setFilters({
      ...filters,
      brandSlug: value
    })
  }

  const clearBrand = (): void => {
    setFilters({
      ...filters,
      brandSlug: undefined
    })
  }

  return (
    <div>
      <Label>Brand</Label>
      <div className='flex items-center justify-between gap-2'>
        <Select onValueChange={handleBrandChange} defaultValue={filters.brandSlug}>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder='Select a brand' />
          </SelectTrigger>
          <SelectContent>
            {brands.map((brand) => (
              <SelectItem key={brand.id} value={brand.slug}>
                {brand.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button onClick={clearBrand} variant="secondary" className='w-1/4'>
          Clear
        </Button>
      </div>
    </div>
  )
}

export default BrandSelect
