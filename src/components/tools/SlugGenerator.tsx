'use client'

import { useState } from 'react'

function toSlug(text: string, separator: string) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/[\s-]+/g, separator)
}

export default function SlugGenerator() {
  const [input, setInput] = useState('')
  const [separator, setSeparator] = useState('-')
  const [copied, setCopied] = useState(false)

  const slug = toSlug(input, separator)

  const copy = () => {
    navigator.clipboard.writeText(slug)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div>
      <div className="mb-4">
        <label className="mb-1 block text-sm font-medium text-gray-700">Input Text</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a title, heading, or any text..."
          className="tool-textarea h-32"
        />
      </div>

      <div className="mb-4 flex items-center gap-3">
        <label className="text-sm font-medium text-gray-700">Separator:</label>
        <select value={separator} onChange={(e) => setSeparator(e.target.value)} className="rounded-lg border px-3 py-2 text-sm">
          <option value="-">Hyphen (-)</option>
          <option value="_">Underscore (_)</option>
          <option value=".">Dot (.)</option>
        </select>
      </div>

      {slug && (
        <div className="rounded-lg bg-gray-50 p-4">
          <div className="mb-1 flex items-center justify-between">
            <label className="text-sm font-semibold text-gray-700">Generated Slug</label>
            <button onClick={copy} className="text-sm text-emerald-600 hover:text-emerald-800">{copied ? 'Copied!' : 'Copy'}</button>
          </div>
          <code className="text-lg text-emerald-700">{slug}</code>
          <p className="mt-2 text-xs text-gray-400">{slug.length} characters</p>
        </div>
      )}
    </div>
  )
}
