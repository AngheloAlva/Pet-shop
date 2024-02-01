import { addProductToCart } from '@/app/lib/api/shop/cart'
import { Button } from '../../ui/button'
import { useToast } from '../../ui/use-toast'

interface AddProductButtonProps {
  quantity: number
  productId: number
  optionSelectedIndex: number
}

function AddProductButton ({
  optionSelectedIndex, productId, quantity
}: AddProductButtonProps): React.ReactElement {
  const { toast } = useToast()

  const handleAddToCart = async (): Promise<void> => {
    try {
      // TODO: Add user authentication

      await addProductToCart({
        optionSelectedIndex,
        productId,
        quantity
      })
    } catch (error) {
      toast({
        title: 'Error adding product to cart',
        description: (error as any).response?.data.message,
        duration: 3000
      })
    }
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <Button className='h-11 w-full' onClick={handleAddToCart}>
      Add to cart
    </Button>
  )
}

export default AddProductButton
