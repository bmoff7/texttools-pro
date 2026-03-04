import type { Metadata } from 'next'
import RemoveDuplicates from '@/components/tools/RemoveDuplicates'

export const metadata: Metadata = {
  title: 'Remove Duplicate Lines - Delete Duplicates from Text Online',
  description: 'Free online tool to remove duplicate lines from text. Supports case-sensitive and case-insensitive matching with whitespace trimming.',
  keywords: ['remove duplicate lines', 'delete duplicates', 'unique lines', 'remove duplicates online', 'deduplicate text'],
}

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold">Remove Duplicate Lines</h1>
      <p className="mb-6 text-gray-600">Remove duplicate lines from your text and keep only unique entries.</p>
      <RemoveDuplicates />
      <section className="mt-12 max-w-3xl text-sm text-gray-500 space-y-2">
        <h2 className="text-lg font-semibold text-gray-700">About This Tool</h2>
        <p>Quickly remove duplicate lines from any text. Supports case-sensitive and case-insensitive comparison, with optional whitespace trimming. Shows you exactly how many duplicates were removed.</p>
      </section>
    </div>
  )
}
