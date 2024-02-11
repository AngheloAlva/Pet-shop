import AdminDeletedCategoriesSection from '@/app/components/admin/categories/Deleted-categories-section'

function AdminDeletedCategoriesPage (): React.ReactElement {
  return (
    <main className='flex flex-col gap-7 pt-4 md pb-20 px-5 text-text-100'>
      <AdminDeletedCategoriesSection />
    </main>
  )
}

export default AdminDeletedCategoriesPage
