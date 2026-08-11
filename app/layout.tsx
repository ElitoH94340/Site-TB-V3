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
        url: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/icon-light-32x32.png`,
        media: '(prefers-color-scheme: light)',
      },
      {
        url: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/icon-dark-32x32.png`,
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/icon.svg`,
        type: 'image/svg+xml',
      },
    ],
    apple: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/apple-icon.png`,
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
    <html lang="fr" className={`bg-background ${geist.variable} ${instrumentSerif.variable}`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
