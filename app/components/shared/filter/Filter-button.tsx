import CategorySelect from './Category-select'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '../../ui/sheet'

import type { FilterProps } from '@/types/shared/FiltersProps'
import BrandSelect from './Brand-select'
import LifeStageSelect from './Life-stage-select'
import PetTypeSelect from './Pet-type-select'

function FilterButton (
  { setFilters, filters }: FilterProps
): React.ReactElement {
  return (
    <Sheet>
      <SheetTrigger>
        <span className='bg-blue-500 hover:bg-blue-400 hover:text-bg-100 text-bg-100 h-9 px-6 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground'>
          Filter
        </span>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filter</SheetTitle>
          <SheetDescription>Filter by category</SheetDescription>
        </SheetHeader>

        <div className='flex flex-col gap-4 mt-8'>
          <CategorySelect setFilters={setFilters} filters={filters} />
          <BrandSelect setFilters={setFilters} filters={filters} />
          <LifeStageSelect setFilters={setFilters} filters={filters} />
          <PetTypeSelect setFilters={setFilters} filters={filters} />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default FilterButton
