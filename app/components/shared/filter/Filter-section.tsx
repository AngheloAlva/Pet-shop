import type { FilterProps } from '@/types/shared/FiltersProps'
import BrandSelect from './Brand-select'
import CategorySelect from './Category-select'
import LifeStageSelect from './Life-stage-select'
import PetTypeSelect from './Pet-type-select'
import { Separator } from '../../ui/separator'

function FilterSection (
  { setFilters, filters }: FilterProps
): React.ReactElement {
  return (
    <div className='hidden lg:block w-1/5'>
      <h2 className='text-lg font-bold'>Filters</h2>
      <Separator />
      <div className='flex flex-col gap-4 mt-2'>
        <CategorySelect setFilters={setFilters} filters={filters} className='flex-col items-start' />
        <Separator />
        <BrandSelect setFilters={setFilters} filters={filters} className='flex-col items-start' />
        <Separator />
        <LifeStageSelect setFilters={setFilters} filters={filters} className='flex-col items-start' />
        <Separator />
        <PetTypeSelect setFilters={setFilters} filters={filters} className='flex-col items-start' />
      </div>
    </div>
  )
}

export default FilterSection
