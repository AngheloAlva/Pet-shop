import Navbar from '../components/shared/Navbar/Navbar'
import Footer from '../components/shared/footer/Footer'

export default function GeneralLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>): React.ReactElement {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
