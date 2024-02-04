/* eslint-disable array-callback-return */
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import { Button } from '../../ui/button'

interface PaginationButtonsProps {
  setPage: (page: number) => void
  limit: number
  total: number
  page: number
}

function PaginationButtons ({
  setPage, limit, page, total
}: PaginationButtonsProps): React.ReactElement {
  const maxQuantity = 3

  return (
    <>
      <Button
        onClick={() => { setPage(page - 1) } }
        disabled={page === 1}
        className='bg-accent-100 hover:bg-accent-300'
      >
        <FaAngleLeft />
      </Button>

      {
        Array.from({ length: Math.ceil(total / limit) }).map((_, index) => {
          if (index < maxQuantity || index === Math.ceil(total / limit) - 1) {
            return (
              <Button
                key={index}
                onClick={() => { setPage(index + 1) } }
                disabled={page === index + 1}
                className='bg-primary-100 hover:bg-primary-300'
              >
                {index + 1}
              </Button>
            )
          } else if (index === maxQuantity) {
            return (
              <Button key={index} disabled className='bg-primary-100 hover:bg-primary-300'>
                ...
              </Button>
            )
          }
        })
      }

      <Button
        onClick={() => { setPage(page + 1) } }
        disabled={page * limit >= total}
        className='bg-accent-100 hover:bg-accent-300'
      >
        <FaAngleRight />
      </Button>
    </>
  )
}

export default PaginationButtons
