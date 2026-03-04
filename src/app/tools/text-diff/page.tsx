import type { Metadata } from 'next'
import TextDiff from '@/components/tools/TextDiff'

export const metadata: Metadata = {
  title: 'Text Diff - Compare Two Texts and Find Differences Online',
  description: 'Free online text diff tool. Compare two blocks of text side by side and see added, removed, and unchanged lines highlighted.',
  keywords: ['text diff', 'text compare', 'diff checker', 'compare text online', 'find differences in text'],
}

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold">Text Diff / Compare</h1>
      <p className="mb-6 text-gray-600">Compare two texts and see the differences highlighted line by line.</p>
      <TextDiff />
      <section className="mt-12 max-w-3xl text-sm text-gray-500 space-y-2">
        <h2 className="text-lg font-semibold text-gray-700">About Text Diff</h2>
        <p>This tool compares two blocks of text line by line and highlights additions and removals. Useful for comparing document versions, code changes, or any text content.</p>
      </section>
    </div>
  )
}
