import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'TextTools Pro - Free Online Text Utilities',
    template: '%s | TextTools Pro',
  },
  description:
    'Free online text tools: word counter, case converter, text diff, duplicate remover, line sorter, find & replace, and more. Fast, private, no sign-up.',
  keywords: [
    'text tools', 'word counter', 'character counter', 'case converter',
    'text diff', 'remove duplicate lines', 'sort lines', 'find and replace',
    'slug generator', 'word frequency counter', 'online text tools',
  ],
  openGraph: {
    title: 'TextTools Pro - Free Online Text Utilities',
    description: 'Free, fast, private text manipulation tools that run in your browser.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9740462215782549"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <footer className="border-t bg-white py-8 text-center text-sm text-gray-500">
          <p>TextTools Pro &mdash; All tools run 100% in your browser. Your data never leaves your device.</p>
        </footer>
      </body>
    </html>
  )
}
