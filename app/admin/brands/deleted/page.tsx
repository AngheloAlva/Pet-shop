import AdminDeletedBrandsSection from '@/app/components/admin/brands/Deleted-brands-section'

function AdminDeletedBrandsPage (): React.ReactElement {
  return (
    <main className='flex flex-col gap-7 pt-4 md pb-20 px-5 text-text-100'>
      <AdminDeletedBrandsSection />
    </main>
  )
}

export default AdminDeletedBrandsPage
