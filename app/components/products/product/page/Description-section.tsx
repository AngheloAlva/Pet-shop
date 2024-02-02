import type { Product } from '@/types/shop/products.types'

interface DescriptionSectionProps {
  description: Product['description']
}

function DescriptionSection (
  { description }: DescriptionSectionProps
): React.ReactElement {
  return (
    <section className='flex flex-col gap-4 text-text-100 lg:pt-10'>
      <h2 className='text-xl font-bold'>Description</h2>
      {
        (JSON.parse(description) as Array<{ title: string, content: string }>).map((section, index) => (
          <div key={index} className='flex flex-col gap-2'>
            <h3 className='text-md font-bold'>{section.title}</h3>
            <p className='text-sm'>{section.content}</p>
          </div>
        ))
      }
    </section>
  )
}

export default DescriptionSection
