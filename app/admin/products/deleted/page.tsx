import AdminDeletedProductsSection from '@/app/components/admin/products/Deleted-products-section'

function AdminDeletedProductsPage (): React.ReactElement {
  return (
    <main className='flex flex-col gap-7 pt-4 md pb-20 px-5 text-text-100'>

      <AdminDeletedProductsSection />
    </main>
  )
}

export default AdminDeletedProductsPage
