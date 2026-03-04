import type { Metadata } from 'next'
import FindReplace from '@/components/tools/FindReplace'

export const metadata: Metadata = {
  title: 'Find and Replace - Search and Replace Text Online',
  description: 'Free online find and replace tool. Search for text patterns and replace them instantly. Supports regular expressions and case-sensitive matching.',
  keywords: ['find and replace', 'find replace online', 'search and replace text', 'regex find replace', 'text replace tool'],
}

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold">Find & Replace</h1>
      <p className="mb-6 text-gray-600">Search for text and replace it. Supports regex and case-sensitive matching.</p>
      <FindReplace />
      <section className="mt-12 max-w-3xl text-sm text-gray-500 space-y-2">
        <h2 className="text-lg font-semibold text-gray-700">About Find & Replace</h2>
        <p>A powerful find and replace tool with support for regular expressions. Shows match count in real-time and supports case-sensitive and case-insensitive search modes.</p>
      </section>
    </div>
  )
}
