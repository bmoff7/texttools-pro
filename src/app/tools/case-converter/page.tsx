import type { Metadata } from 'next'
import CaseConverter from '@/components/tools/CaseConverter'

export const metadata: Metadata = {
  title: 'Case Converter - Convert Text to UPPER, lower, Title Case Online',
  description: 'Free online case converter. Transform text to uppercase, lowercase, title case, sentence case, and more instantly.',
  keywords: ['case converter', 'uppercase converter', 'lowercase converter', 'title case converter', 'text case changer'],
}

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold">Case Converter</h1>
      <p className="mb-6 text-gray-600">Convert text between uppercase, lowercase, title case, sentence case, and more.</p>
      <CaseConverter />
      <section className="mt-12 max-w-3xl text-sm text-gray-500 space-y-2">
        <h2 className="text-lg font-semibold text-gray-700">About Case Converter</h2>
        <p>Quickly change the case of any text. Supports lowercase, UPPERCASE, Title Case, Sentence case, aLtErNaTiNg case, and iNVERSE case. Useful for fixing accidental caps lock, formatting headlines, and standardizing text.</p>
      </section>
    </div>
  )
}
