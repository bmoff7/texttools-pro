import type { Metadata } from 'next'
import SlugGenerator from '@/components/tools/SlugGenerator'

export const metadata: Metadata = {
  title: 'Slug Generator - Convert Text to URL-Friendly Slugs',
  description: 'Free online slug generator. Convert any text to clean, URL-friendly slugs with custom separators. Handles special characters and accents.',
  keywords: ['slug generator', 'url slug', 'text to slug', 'url friendly text', 'slug converter', 'permalink generator'],
}

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold">Slug Generator</h1>
      <p className="mb-6 text-gray-600">Convert any text to clean, URL-friendly slugs with custom separators.</p>
      <SlugGenerator />
      <section className="mt-12 max-w-3xl text-sm text-gray-500 space-y-2">
        <h2 className="text-lg font-semibold text-gray-700">About URL Slugs</h2>
        <p>A URL slug is the part of a web address that identifies a page in human-readable form. This tool converts any text into a clean slug by lowercasing, removing special characters, and replacing spaces with your chosen separator.</p>
      </section>
    </div>
  )
}
