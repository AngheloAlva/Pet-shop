import { ClerkProvider } from '@clerk/nextjs'
import { nunito } from './lib/fonts'

import { Toaster } from './components/ui/toaster'

import './globals.css'

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>): React.ReactElement {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={nunito.className}>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  )
}
