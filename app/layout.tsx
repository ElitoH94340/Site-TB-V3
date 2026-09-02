import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Instrument_Serif, Geist } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-instrument-serif',
})

export const metadata: Metadata = {
  title: {
    default: 'Tournez Bobines — Le doublage pour tous',
    template: '%s — Tournez Bobines',
  },
  description: 'Le doublage pour tous. Studio, événements et savoir-faire.',
  icons: {
    icon: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/tournez bobines logo 3.png`,
        type: 'image/png',
      },
    ],
    apple: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/tournez bobines logo 3.png`,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`bg-neutral-950 ${geist.variable} ${instrumentSerif.variable}`}>
      <body className="bg-neutral-950 font-sans antialiased text-neutral-50">
        <SiteHeader />
        <main>{children}</main>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
