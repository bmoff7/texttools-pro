'use client'

import { useState, useMemo } from 'react'

export default function WordFrequency() {
  const [text, setText] = useState('')
  const [minLength, setMinLength] = useState(1)
  const [sortBy, setSortBy] = useState<'freq' | 'alpha'>('freq')

  const words = useMemo(() => {
    if (!text.trim()) return []
    const counts: Record<string, number> = {}
    text.toLowerCase().replace(/[^a-z0-9'\s-]/gi, '').split(/\s+/).filter(Boolean).forEach((w) => {
      if (w.length >= minLength) counts[w] = (counts[w] || 0) + 1
    })
    const entries = Object.entries(counts)
    if (sortBy === 'freq') entries.sort((a, b) => b[1] - a[1])
    else entries.sort((a, b) => a[0].localeCompare(b[0]))
    return entries
  }, [text, minLength, sortBy])

  const maxCount = words.length > 0 ? words[0][1] : 0
  const totalWords = words.reduce((s, [, c]) => s + c, 0)

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your text here to analyze word frequency..."
        className="tool-textarea h-48 mb-4"
      />

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <label className="flex items-center gap-2 text-sm text-gray-600">
          Min length:
          <input type="number" min={1} max={20} value={minLength} onChange={(e) => setMinLength(+e.target.value)} className="w-16 rounded border px-2 py-1 text-sm" />
        </label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value as any)} className="rounded-lg border px-3 py-2 text-sm">
          <option value="freq">Sort by frequency</option>
          <option value="alpha">Sort alphabetically</option>
        </select>
        <span className="text-sm text-gray-500">{words.length} unique words &middot; {totalWords} total</span>
      </div>

      {words.length > 0 && (
        <div className="rounded-lg border bg-white overflow-auto max-h-96">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                <th className="px-4 py-2 text-left font-medium text-gray-600">#</th>
                <th className="px-4 py-2 text-left font-medium text-gray-600">Word</th>
                <th className="px-4 py-2 text-left font-medium text-gray-600">Count</th>
                <th className="px-4 py-2 text-left font-medium text-gray-600 w-1/3">Frequency</th>
              </tr>
            </thead>
            <tbody>
              {words.slice(0, 200).map(([word, count], i) => (
                <tr key={word} className="border-t">
                  <td className="px-4 py-1.5 text-gray-400">{i + 1}</td>
                  <td className="px-4 py-1.5 font-mono font-medium">{word}</td>
                  <td className="px-4 py-1.5">{count}</td>
                  <td className="px-4 py-1.5">
                    <div className="flex items-center gap-2">
                      <div className="h-2 rounded bg-emerald-200 flex-1">
                        <div className="h-2 rounded bg-emerald-500" style={{ width: `${(count / maxCount) * 100}%` }} />
                      </div>
                      <span className="text-xs text-gray-400 w-10 text-right">{((count / totalWords) * 100).toFixed(1)}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
