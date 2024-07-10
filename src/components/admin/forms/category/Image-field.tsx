import { Label, useToast } from "@/components/ui"

function ImageField({
	image,
	setImage,
}: {
	image: string
	setImage: (image: string) => void
}): React.ReactElement {
	const { toast } = useToast()

	return (
		<div>
			<Label>Image</Label>
			{/* <UploadButton
        endpoint="imageUploader"
        appearance={{ button: { width: '100%', backgroundColor: '#DEB887' } }}
        onClientUploadComplete={(res: Array<{ url: string }>) => {
          setImage(res[0].url)
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

export default ImageField
