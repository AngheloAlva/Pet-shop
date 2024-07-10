import { Label, useToast } from "@/components/ui"
import type { Dispatch, SetStateAction } from "react"

export default function ImageField({
	setImages,
	images,
}: {
	setImages: Dispatch<SetStateAction<string[]>>
	images: string[]
}): React.ReactElement {
	const { toast } = useToast()

	return (
		<div>
			<Label>Images</Label>
			{/* <UploadButton
        endpoint="imageUploader"
        appearance={{ button: { width: '100%', backgroundColor: '#DEB887' } }}
        onClientUploadComplete={(res: Array<{ url: string }>) => {
          setImages([...images, res[0].url])
        }}
        onUploadError={(error: Error) => {
          toast({
            title: 'Error uploading image',
            description: `There was an error uploading the image, please try again later ${error.message}`,
            variant: 'destructive',
            duration: 3000
          })
        }}
        /> */}
		</div>
	)
}
