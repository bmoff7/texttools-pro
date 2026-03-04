import type { Metadata } from 'next'
import WordFrequency from '@/components/tools/WordFrequency'

export const metadata: Metadata = {
  title: 'Word Frequency Counter - Analyze Word Frequency Online',
  description: 'Free online word frequency counter. Analyze the most common words in any text with frequency bars, percentages, and sortable results.',
  keywords: ['word frequency counter', 'word frequency analyzer', 'most common words', 'text analysis tool', 'word count frequency'],
}

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold">Word Frequency Counter</h1>
      <p className="mb-6 text-gray-600">Analyze word frequency with visual bars, percentages, and sortable results.</p>
      <WordFrequency />
      <section className="mt-12 max-w-3xl text-sm text-gray-500 space-y-2">
        <h2 className="text-lg font-semibold text-gray-700">About Word Frequency Analysis</h2>
        <p>This tool counts how often each word appears in your text and displays results sorted by frequency. Useful for SEO keyword analysis, writing analysis, and text mining.</p>
      </section>
    </div>
  )
}
