import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../ui/select'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../ui/form'

import type { Control } from 'react-hook-form'

function LifeStageSelectField (
  { control }: { control: Control<any> }
): React.ReactElement {
  const lifeStages = [
    'PUPPY',
    'ADULT',
    'SENIOR',
    'KITTEN',
    'ALL_LIFE_STAGES'
  ]

  return (
    <FormField
      control={control}
      name="lifeStage"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Life Stage</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a life stage" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {
                lifeStages.map((lifeStage) => (
                  <SelectItem key={lifeStage} value={lifeStage.toString()}>
                    {lifeStage}
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

export default LifeStageSelectField
