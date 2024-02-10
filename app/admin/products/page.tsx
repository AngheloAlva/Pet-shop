import AdminProductsSection from '@/app/components/admin/products/Products-section'

function AdminProductsPage (): React.ReactElement {
  return (
    <main className='flex flex-col gap-7 pt-4 md pb-20 px-5 text-text-100'>
      <AdminProductsSection />
    </main>
  )
}

export default AdminProductsPage
