import { type Metadata } from 'next'
import { Space_Grotesk, Source_Sans_3 } from 'next/font/google'
import localFont from 'next/font/local'
import './gloabls.css'
import '@/styles/tailwind.css'
import { Providers } from './providers'
import { Layout } from '@/components/Layout'
import '@vidstack/react/player/styles/base.css'
import '@vidstack/react/player/styles/plyr/theme.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Docs',
    default: "CS For All - The Young People's Project",
  },
  description:
    "Building Capacity in Computer Science Education and Student Near Peer Classroom Mentorship. A Young People's Project Research Practitioner Partnership",
}

const SpaceGroteskFont = Space_Grotesk({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})
const SourceSans = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
  weight: ['400', '700'],
})
const MonaspaceArgon_Regular = localFont({
  src: 'fonts/MonaspaceArgon-Regular.woff',
  variable: '--font-argon',
  weight: '300',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${SpaceGroteskFont.variable} ${SourceSans.variable} ${MonaspaceArgon_Regular.variable} min-h-4xl antialiased`}
      >
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
