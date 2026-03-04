import type { Metadata } from 'next'
import SortLines from '@/components/tools/SortLines'

export const metadata: Metadata = {
  title: 'Sort Lines - Sort Text Lines Alphabetically Online',
  description: 'Free online line sorter. Sort lines alphabetically (A-Z, Z-A), numerically, by length, or shuffle them randomly.',
  keywords: ['sort lines', 'sort text', 'alphabetical sort online', 'sort lines alphabetically', 'line sorter', 'text sorter'],
}

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold">Sort Lines</h1>
      <p className="mb-6 text-gray-600">Sort lines alphabetically, numerically, by length, or shuffle randomly.</p>
      <SortLines />
      <section className="mt-12 max-w-3xl text-sm text-gray-500 space-y-2">
        <h2 className="text-lg font-semibold text-gray-700">About Line Sorter</h2>
        <p>Sort text lines in multiple ways: alphabetical (A-Z or Z-A), numeric order, by line length, or random shuffle. Great for organizing lists, cleaning data, or randomizing items.</p>
      </section>
    </div>
  )
}
