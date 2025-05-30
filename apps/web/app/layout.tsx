import { NextTamaguiProvider } from './NextTamaguiProvider'
import { MainLayout } from '@repo/ui'
import './globals.css'

export const metadata = {
  title: 'Nawhas.com',
  description: 'The largest library of nawhas online.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
      </head>
      <body suppressHydrationWarning>
        <NextTamaguiProvider defaultTheme="dark">
          <MainLayout>
            {children}
          </MainLayout>
        </NextTamaguiProvider>
      </body>
    </html>
  )
}