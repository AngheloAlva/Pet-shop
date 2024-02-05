import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../../ui/sheet'

function FilterButtons (): React.ReactElement {
  return (
    <Sheet>
      <SheetTrigger>
        <span className='h-9 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground'>
          Filter
        </span>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filter</SheetTitle>
          <SheetDescription>Filter by category</SheetDescription>
        </SheetHeader>
        <div className='flex flex-col gap-2'>
          <button className='btn btn-primary'>Category 1</button>
          <button className='btn btn-primary'>Category 2</button>
          <button className='btn btn-primary'>Category 3</button>
          <button className='btn btn-primary'>Category 4</button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default FilterButtons
