'use client'

import useCategories from '@/app/hooks/useCategories'
import { petTypes } from '../../../../lib/consts'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger
} from '@/app/components/ui/navigation-menu'

function NavMenu (): React.ReactElement {
  const { categories } = useCategories({
    page: 1,
    limit: 100,
    isAvailable: true
  })

  return (
    <NavigationMenu>
      <NavigationMenuList className='w-[80vw] lg:w-[65vw] xl:w-[50vw]'>
        {
          petTypes.map((petType, index) => {
            return (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger className='w-full'>
                  {petType}
                </NavigationMenuTrigger>
                <NavigationMenuContent className='min-w-[80vw] lg:min-w-[65vw] xl:min-w-[50vw]'>
                  <ul className="grid gap-3 p-4 grid-cols-2 min-w-full">
                    {categories
                      .filter((category) => category.petType === petType)
                      .map((category, index) => {
                        return (
                          <li key={index} className='flex flex-col'>
                            <NavigationMenuLink href={`/categories/${category.slug}`} className='font-semibold'>
                              {category.name}
                              <p className='text-muted-foreground line-clamp-2 font-light'>
                                {category.description}
                              </p>
                            </NavigationMenuLink>
                          </li>
                        )
                      })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            )
          })
        }
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavMenu
