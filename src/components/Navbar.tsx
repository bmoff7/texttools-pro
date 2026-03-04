'use client'

import Link from 'next/link'
import { useState } from 'react'

const tools = [
  { name: 'Word Counter', href: '/tools/word-counter' },
  { name: 'Case Converter', href: '/tools/case-converter' },
  { name: 'Text Diff', href: '/tools/text-diff' },
  { name: 'Remove Duplicates', href: '/tools/remove-duplicates' },
  { name: 'Sort Lines', href: '/tools/sort-lines' },
  { name: 'Find & Replace', href: '/tools/find-replace' },
  { name: 'Slug Generator', href: '/tools/slug-generator' },
  { name: 'Word Frequency', href: '/tools/word-frequency' },
  { name: 'Whitespace Remover', href: '/tools/whitespace-remover' },
  { name: 'Reverse Text', href: '/tools/reverse-text' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold text-emerald-600">TextTools Pro</Link>
        <div className="hidden gap-1 md:flex">
          {tools.slice(0, 5).map((t) => (
            <Link key={t.href} href={t.href} className="rounded-md px-3 py-1.5 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-700">{t.name}</Link>
          ))}
          <div className="relative group">
            <button className="rounded-md px-3 py-1.5 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-700">More &darr;</button>
            <div className="invisible absolute right-0 top-full z-10 mt-1 w-48 rounded-lg border bg-white py-1 shadow-lg group-hover:visible">
              {tools.slice(5).map((t) => (
                <Link key={t.href} href={t.href} className="block px-4 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-700">{t.name}</Link>
              ))}
            </div>
          </div>
        </div>
        <button className="md:hidden rounded p-2 text-gray-600 hover:bg-gray-100" onClick={() => setOpen(!open)}>
          {open ? '\u2715' : '\u2630'}
        </button>
      </div>
      {open && (
        <div className="border-t bg-white px-4 py-2 md:hidden">
          {tools.map((t) => (
            <Link key={t.href} href={t.href} className="block rounded px-3 py-2 text-sm text-gray-600 hover:bg-emerald-50" onClick={() => setOpen(false)}>{t.name}</Link>
          ))}
        </div>
      )}
    </nav>
  )
}
