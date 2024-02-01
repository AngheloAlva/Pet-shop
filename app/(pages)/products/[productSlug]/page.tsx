'use client'

import ImageSection from '@/app/components/products/product/page/Image-section'
import PrimaryInfoSection from '@/app/components/products/product/page/Primary-info-section'
import useProductBySlug from '@/app/hooks/useProductBySlug'

function ProductPage (
  { params }: { params: { productSlug: string } }
): React.ReactElement {
  const { product, isLoading } = useProductBySlug(params.productSlug)

  return (
    <main className='px-5 sm:px-10 md:px-20 pt-10 pb-20 lg:px-40 flex flex-col w-screen gap-10 lg:flex-row'>
      {
        isLoading
          ? <p>Loading...</p>
          : (<>
              <ImageSection images={product.images} name={product.name} />
              <PrimaryInfoSection product={product} />
            </>)
      }
    </main>
  )
}

// {
//   "id": 5,
//   "categoryId": 2,
//   "petType": [
//       "CAT"
//   ],
//   "name": "Acana Cat First Feast",
//   "miniDesc": "Complete and prepared food for your kitten's first months. Its formula made with 70% small prey animals provides them with all the nutrients they need to grow and develop correctly.",
//   "description": "[{\"title\":\"General description\",\"content\":\"Your little bobcat needs the right kitten fuel and plenty of naps. When you pour ACANA First Feast dry kitten food into her bowl, you can be sure she'll have all the nutrition she needs for all her kitty antics. \\n First Feast includes 70%* quality animal ingredients, such as free-range chicken and whole herring, delivered fresh or raw and completely free of flavors, preservatives or colors.\"},{\"title\":\"Benefits\",\"content\":\"Packed with high-quality protein for muscle and bone development. \\n Taurine, DHA and EPA help maintain healthy cognitive and retinal function. \\n Omega fatty acids help keep your kitty's coat and skin looking shiny and healthy. \\n The ingredients and the liver of small game create an appetizing flavor. \\n Made in USA\"},{\"title\":\"Ingredients\",\"content\":\"Boneless chicken, chicken meal, herring meal, oats, whole peas, chicken fat, whole green lentils, turkey flour, whole chickpeas, whole herring, eggs, haddock oil, natural chicken flavor, lentil fiber, quail boneless, chicken cartilage, chicken liver, chicken heart, whole cranberries, dried seaweed, choline chloride, zinc proteinate, mixed tocopherols (preservative), vitamin E supplement, taurine, vitamin D3 supplement, vitamin A acetate , L-carnitine, Dl-methionine, copper proteinate, niacin, thiamine Mononitrate, Riboflavin, Calcium Pantothenate, Pyridoxine Hydrochloride, Folic Acid, Vitamin B12 Supplement, Biotin, Ascorbic Acid (Vitamin C), Citric Acid (Preservative) , Rosemary Extract, Dry Lactobacillus Acidophilus Fermentation Product, Dry Bifidobacterium Animalis Fermentation Product, Dry Lactobacillus casei Fermentation Product.\"}]",
//   "images": [
//       "https://cdn11.bigcommerce.com/s-d331r3r4ex/images/stencil/608x608/products/21538/43714/4669__66785.1691699315.jpg?c=1"
//   ],
//   "lifeStage": "ADULT",
//   "brandId": 11,
//   "isAvailable": true,
//   "createdAt": "2024-01-31T01:27:50.249Z",
//   "slug": "acana-cat-first-feast"
// }

export default ProductPage
