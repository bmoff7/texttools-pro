import type { Metadata } from 'next'
import WhitespaceRemover from '@/components/tools/WhitespaceRemover'

export const metadata: Metadata = {
  title: 'Whitespace Remover - Clean Up Extra Spaces and Blank Lines',
  description: 'Free online whitespace remover. Trim lines, remove extra spaces, collapse blank lines, and clean up messy text instantly.',
  keywords: ['whitespace remover', 'remove extra spaces', 'remove blank lines', 'trim whitespace', 'clean text online'],
}

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold">Whitespace Remover</h1>
      <p className="mb-6 text-gray-600">Clean up extra spaces, tabs, and blank lines from your text.</p>
      <WhitespaceRemover />
      <section className="mt-12 max-w-3xl text-sm text-gray-500 space-y-2">
        <h2 className="text-lg font-semibold text-gray-700">About This Tool</h2>
        <p>Remove unwanted whitespace from text with multiple cleaning options: trim lines, remove empty lines, collapse multiple spaces, convert tabs to spaces, and more.</p>
      </section>
    </div>
  )
}
