import { type Metadata } from 'next'
import { Alfa_Slab_One, Inter, Titillium_Web } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const alfa = Alfa_Slab_One({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-alfa'
})

const titil = Titillium_Web({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-titil',
  weight: ['200', '300', '400', '600', '700', '900']
})

// Use local version of Lexend so that we can use OpenType features
const lexend = localFont({
  src: '../fonts/lexend.woff2',
  display: 'swap',
  variable: '--font-lexend',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Docs',
    default: "CS For All - The Young People's Project",
  },
  description:
    "Building Capacity in Computer Science Education and Student Near Peer Classroom Mentorship. A Young People's Project Research Practitioner Partnership",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx('h-full antialiased', inter.variable, lexend.variable, titil.variable, alfa.variable)}
      suppressHydrationWarning
    >
      <body className="flex min-h-full bg-white dark:bg-slate-900 transition-all">
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
