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

function LifeStageSelect (
  { setFilters, filters }: FilterProps
): React.ReactElement {
  const lifeStages = [
    { value: 'PUPPY', label: 'Puppy' },
    { value: 'ADULT', label: 'Adult' },
    { value: 'SENIOR', label: 'Senior' },
    { value: 'KITTEN', label: 'Kitten' },
    { value: 'ALL_LIFE_STAGES', label: 'All Life Stages' }
  ]

  const handleLifeStageChange = (value: string): void => {
    setFilters({
      ...filters,
      lifeStage: value
    })
  }

  const clearLifeStage = (): void => {
    setFilters({
      ...filters,
      lifeStage: undefined
    })
  }

  return (
    <div>
      <Label>Life Stage</Label>
      <div className='flex items-center justify-between gap-2'>
        <Select onValueChange={handleLifeStageChange} defaultValue={filters.lifeStage}>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder='Select a Life Stage' />
          </SelectTrigger>
          <SelectContent>
            {lifeStages.map((lifeStage) => (
              <SelectItem key={lifeStage.value} value={lifeStage.value}>
                {lifeStage.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button onClick={clearLifeStage} variant="secondary" className='w-1/4'>
          Clear
        </Button>
      </div>
    </div>
  )
}

export default LifeStageSelect
