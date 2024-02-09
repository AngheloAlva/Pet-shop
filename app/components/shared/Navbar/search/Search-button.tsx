import { FaMagnifyingGlass } from 'react-icons/fa6'
import SearchSection from './Seach-section'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/app/components/ui/dialog'

function SearchButton (): React.ReactElement {
  return (
    <Dialog>
      <DialogTrigger className='text-text-100 hover:text-bg-100 hover:bg-primary-100 p-1 rounded-lg transition-colors cursor-pointer md:bg-white flex items-center justify-between md:border md:border-input md:px-2 md:gap-2 md:cursor-text'>
        <FaMagnifyingGlass className='w-7 h-7 p-[2px]' />
        <div className='hidden md:block text-muted-foreground w-52 text-left'>
          Search...
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Search for a product
          </DialogTitle>
        </DialogHeader>

        <SearchSection />
      </DialogContent>
    </Dialog>
  )
}

export default SearchButton
