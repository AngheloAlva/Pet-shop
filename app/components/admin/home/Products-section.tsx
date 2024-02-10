import { getProducts } from '@/app/lib/api/shop/product'
import AdminProductItem from './Product-item'

async function AdminProductsSection (): Promise<React.ReactElement> {
  const { products, total } = await getProducts({
    isAvailable: true,
    limit: 5,
    page: 1
  })

  return (
    <section className='space-y-2'>
      <div className='flex items-center justify-between w-full'>
        <h2>Products</h2>
        <p>{total} products</p>
      </div>
      {products.map((product) => (
        <AdminProductItem key={product.id} product={product} />
      ))}
    </section>
  )
}

export default AdminProductsSection
