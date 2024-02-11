import { getCategories } from '@/app/lib/api/shop/category'
import { petTypes } from '@/app/lib/consts'
import Link from 'next/link'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/app/components/ui/accordion'

async function CategoryList (): Promise<React.ReactElement> {
  const { categories } = await getCategories({
    page: 1,
    limit: 100,
    isAvailable: true
  })

  return (
    <div className='flex flex-col gap-2 text-text-100'>
      <Accordion type='single' collapsible>
        {
          petTypes.map((petType, index) => {
            return (
              <AccordionItem value={index.toString()} key={index}>
                <AccordionTrigger>
                  {petType}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className='flex flex-col gap-4'>
                    {categories
                      .filter((category) => category.petType === petType)
                      .map((category, index) => {
                        return (
                          <li key={index}>
                            <Link className='pl-2 hover:underline' href={`/categories/${category.slug}`}>
                              {category.name}
                            </Link>
                          </li>
                        )
                      })}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            )
          })
        }
      </Accordion>
    </div>
  )
}

// {
//   "id": 5,
//   "name": "Dog Food",
//   "slug": "dog-food",
//   "description": "Explore our comprehensive range of dog food, crafted to meet the nutritional needs of your canine companions. From puppies to seniors, we offer a variety of flavors and formulas to suit every breed and dietary requirement.",
//   "image": "no image",
//   "createdAt": "2024-02-02T01:32:36.677Z",
//   "petType": "DOG",
//   "isAvailable": true
// }

export default CategoryList
