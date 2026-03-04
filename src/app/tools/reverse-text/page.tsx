import type { Metadata } from 'next'
import ReverseText from '@/components/tools/ReverseText'

export const metadata: Metadata = {
  title: 'Reverse Text - Reverse Characters, Words, and Lines Online',
  description: 'Free online text reverser. Reverse characters, words, lines, or flip text upside down instantly in your browser.',
  keywords: ['reverse text', 'text reverser', 'backwards text', 'flip text', 'reverse words online', 'upside down text'],
}

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold">Reverse Text</h1>
      <p className="mb-6 text-gray-600">Reverse characters, words, or lines. Also supports flipping text upside down.</p>
      <ReverseText />
      <section className="mt-12 max-w-3xl text-sm text-gray-500 space-y-2">
        <h2 className="text-lg font-semibold text-gray-700">About Reverse Text</h2>
        <p>Multiple ways to reverse your text: reverse all characters, reverse word order, reverse lines, reverse each word individually, or flip the text upside down using special Unicode characters.</p>
      </section>
    </div>
  )
}
