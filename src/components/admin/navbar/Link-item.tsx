import Link from 'next/link'

interface LinkItemProps {
  pathName: string
  icon: React.ReactElement
  href: string
  text: string
}

function LinkItem ({
  pathName, href, icon, text
}: LinkItemProps): React.ReactElement {
  return (
    <Link
      className={`
        ${pathName === href ? 'bg-gray-100 text-gray-900' : ''}
        flex items-center gap-3 rounded-lg  px-3 py-2  transition-all hover:text-gray-900 hover:bg-gray-50`
      }
      href={href}
    >
      {icon}
      {text}
    </Link>
  )
}

export default LinkItem
