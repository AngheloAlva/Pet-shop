import type { Product } from './products.types'

interface Category {
  id: number
  name: string
  slug: string
  petType: 'DOG' | 'CAT' | 'BIRD' | 'FISH' | 'REPTILE' | 'SMALL_ANIMAL'
  description: string
  image: string
  createdAt: Date
  products?: Product[]
  isAvailable: boolean
}

interface CreateCategory {
  name: string
  slug: string
  description: string
  petType: 'DOG' | 'CAT' | 'BIRD' | 'FISH' | 'REPTILE' | 'SMALL_ANIMAL'
  image: string
}

interface UpdateCategory {
  name?: string
  slug?: string
  description?: string
  image?: string
}

export {
  type Category,
  type CreateCategory,
  type UpdateCategory
}
