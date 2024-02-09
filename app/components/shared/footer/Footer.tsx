import Image from 'next/image'
import Link from 'next/link'

import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6'

const catalogList = {
  title: 'Catalog',
  links: [
    { title: 'For Dogs', href: '/pets/dog' },
    { title: 'For Cats', href: '/pets/cat' },
    { title: 'For Birds', href: '/pets/birds' },
    { title: 'For Fish', href: '/pets/fish' },
    { title: 'For Small pets', href: '/pets/small_pets' },
    { title: 'For Reptiles', href: '/pets/reptiles' }
  ]
}

const socialMedia = {
  title: 'Social Media',
  links: [
    { title: <><FaFacebook /> Facebook</>, href: 'https://www.facebook.com' },
    { title: <><FaInstagram /> Instagram</>, href: 'https://www.instagram.com' },
    { title: <><FaXTwitter /> Twitter</>, href: 'https://www.twitter.com' }
  ]
}

function Footer (): React.ReactElement {
  const year = new Date().getFullYear()

  return (
  <footer className="bg-text-100 min-h-96 text-bg-100 py-8 px-10 flex flex-col gap-14 sm:gap-0 sm:py-14 sm:px-20 lg:px-32 lg:py-20 xl:px-40 xl:py-24">
      <div className='flex flex-col gap-14 sm:flex-row w-full justify-between'>
        <div className="flex items-end justify-between w-full sm:min-h-full sm:flex-col sm:items-start sm:w-auto">
          <Image
            src={'/images/2.svg'}
            alt="Logo"
            width={150}
            height={100}
            className='w-36'
          />
        </div>

        <div className='grid grid-cols-2 gap-y-8 sm:grid-rows-2 lg:flex lg:gap-x-10 xl:gap-x-20 2xl:gap-x-32'>
          <ul className='flex-col flex gap-1 sm:row-span-2'>
            <li><h3 className='font-semibold text-xl mb-3'>
              {catalogList.title}
            </h3></li>
            {catalogList.links.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className='hover:underline hover:text-cream-500'>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          <ul className='flex-col flex gap-1'>
            <li><h3 className='font-semibold text-xl mb-3'>Contact Us</h3></li>
            <li>Phone: 123-456-7890</li>
            <li>Email: petshop@petshop.com</li>
          </ul>

          <ul className='flex-col flex gap-1'>
            <li><h3 className='font-semibold text-xl mb-3'>
              {socialMedia.title}
            </h3></li>
            {socialMedia.links.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className='hover:underline hover:text-cream-500 flex items-center gap-1'>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='w-full flex items-start sm:items-end justify-end sm:justify-between'>
        <Image
          src={'/images/footer-image.png'}
          alt="Footer Image"
          width={200}
          height={100}
          className='hidden h-full rounded-lg w-48 sm:block lg:w-60'
        />
        <p className='text-sm text-end lg:text-base'>© {year} PetShop. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
