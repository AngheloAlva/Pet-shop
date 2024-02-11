import { useFieldArray } from 'react-hook-form'

import { FormDescription } from '@/app/components/ui/form'
import { Textarea } from '@/app/components/ui/textarea'
import { Button } from '@/app/components/ui/button'
import { Input } from '@/app/components/ui/input'
import { Label } from '@/app/components/ui/label'

function DescriptionFields (
  { form }: { form: any }
): React.ReactElement {
  const { append, fields, remove } = useFieldArray({
    control: form.control,
    name: 'description'
  })

  return (
    <>
      {fields.map((field, index) => (
        <div key={field.id} className='flex flex-col gap-3'>
          <Label className='underline'>Description Section {index + 1}</Label>
          <div>
            <Label>Title</Label>
            <Input { ...form.register(`description.${index}.title`) } placeholder="Description title" />
          </div>
          <div>
            <Label>Content</Label>
            <Textarea { ...form.register(`description.${index}.content`) } placeholder="Description content" />
            <FormDescription>
              Use "\n" to separate paragraphs. Example: "This is a paragraph.\n This is another paragraph.
            </FormDescription>
          </div>

          <Button
            type='button'
            className='mt-3 w-full'
            variant={'destructive'}
            onClick={() => {
              remove(index)
            }}
          >
            Remove description section {index + 1}
          </Button>
        </div>
      ))}

      <Button
        className='mt-3 w-full'
        type='button'
        variant={'outline'}
        onClick={() => {
          append({
            name: '',
            price: 0,
            stock: 0,
            discount: 0
          })
        }}
      >
        Add new Description section
      </Button>
    </>
  )
}

export default DescriptionFields
