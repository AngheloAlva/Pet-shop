interface Option {
  id: number
  name: string
  price: number
  stock: number
  discount: number
  productId: number
  lastModified: Date
}

interface CreateOption {
  name: string
  price: number
  stock: number
  discount: number
}

interface UpdateOption {
  authId: string
  price?: number
  stock?: number
  discount?: number
}

export {
  type Option,
  type CreateOption,
  type UpdateOption
}
