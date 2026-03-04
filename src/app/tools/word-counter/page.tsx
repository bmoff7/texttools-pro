import type { Metadata } from 'next'
import WordCounter from '@/components/tools/WordCounter'

export const metadata: Metadata = {
  title: 'Word Counter - Count Words, Characters, Sentences Online',
  description: 'Free online word counter tool. Count words, characters, sentences, paragraphs, and estimate reading time. Works instantly in your browser.',
  keywords: ['word counter', 'character counter', 'word count online', 'letter counter', 'text counter', 'reading time calculator'],
}

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold">Word & Character Counter</h1>
      <p className="mb-6 text-gray-600">Count words, characters, sentences, and paragraphs. Estimates reading and speaking time.</p>
      <WordCounter />
      <section className="mt-12 max-w-3xl text-sm text-gray-500 space-y-2">
        <h2 className="text-lg font-semibold text-gray-700">About Word Counter</h2>
        <p>This free word counter instantly calculates word count, character count (with and without spaces), sentence count, paragraph count, and estimated reading and speaking times. Perfect for essays, blog posts, social media, and assignments.</p>
      </section>
    </div>
  )
}
