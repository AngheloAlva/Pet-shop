interface AddressCardItemProps {
  icon: React.ReactElement
  title: string
  value: string
}

function AddressCardItem ({
  icon, title, value
}: AddressCardItemProps): React.ReactElement {
  return (
    <p className='flex items-center justify-between'>
      <span className="flex items-center gap-2 text-blue-500">
        {icon} <strong>{title}: </strong>
      </span>

      {value}
    </p>
  )
}

export default AddressCardItem
