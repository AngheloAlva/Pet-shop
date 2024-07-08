"use client"

import { ResumeSection, SummarySection, UserDataSection } from "@/components/sections"
import { Button } from "@/components/ui"
import { useCartStore } from "@/store/cart"
import Link from "next/link"

function CartPage(): React.ReactElement {
	const { products } = useCartStore()

	return (
		<main className="lg:px-34 flex w-screen flex-col gap-10 px-5 pb-20 pt-28 text-text-100 sm:px-10 md:px-20 md:pt-40 xl:px-44 2xl:px-60">
			<div className="flex flex-col gap-10 lg:flex-row">
				<ResumeSection products={products} />

				<SummarySection products={products} />
			</div>

			{/* <UserDataSection
        user={userDb}
        authId={user?.id ?? ''}
        setIsButtonEnabled={setIsButtonEnabled}
      /> */}

			<div>
				<Button size={"lg"} className="mt-5 w-full bg-green-600 p-0 hover:bg-green-500">
					<Link
						href="/checkout/shipping"
						className="flex h-full w-full items-center justify-center"
					>
						Go to shipping
					</Link>
				</Button>
				{/* {
          isButtonEnabled
            ? null
            : <p className='text-sm text-text-200 text-center'>
                Fill in your personal information to continue
              </p>
        } */}
			</div>
		</main>
	)
}

export default CartPage
