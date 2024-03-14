import './globals.css'

import type { Metadata } from 'next'
import { Bai_Jamjuree as Alt, Montserrat as Sans } from 'next/font/google'
import { Toaster } from 'sonner'

import { ThemeProvider } from '@/components/providers/theme-provider'
import Header from '@/components/sections/header'
import { cn } from '@/lib/utils'

const fontSans = Sans({ subsets: ['latin'], variable: '--font-sans' })
const fontAlt = Alt({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-alt',
})

export const metadata: Metadata = {
  title: 'Kell Crivelaro',
  description: 'Portfólio - Dev Full Stack',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'relative w-screen overflow-x-hidden font-sans font-medium antialiased dark:font-normal',
          fontSans.variable,
          fontAlt.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Toaster
            richColors
            toastOptions={{
              style: { fontSize: '1rem' },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
