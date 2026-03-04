'use client'

import { useState } from 'react'

export default function RemoveDuplicates() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [caseSensitive, setCaseSensitive] = useState(true)
  const [trimLines, setTrimLines] = useState(true)
  const [stats, setStats] = useState({ before: 0, after: 0, removed: 0 })
  const [copied, setCopied] = useState(false)

  const process = () => {
    let lines = input.split('\n')
    const before = lines.length
    if (trimLines) lines = lines.map((l) => l.trim())

    const seen = new Set<string>()
    const unique: string[] = []
    for (const line of lines) {
      const key = caseSensitive ? line : line.toLowerCase()
      if (!seen.has(key)) {
        seen.add(key)
        unique.push(line)
      }
    }
    setOutput(unique.join('\n'))
    setStats({ before, after: unique.length, removed: before - unique.length })
  }

  const copy = () => {
    navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Input</label>
          <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Paste text with duplicate lines..." className="tool-textarea h-72" />
        </div>
        <div>
          <div className="mb-1 flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">Output</label>
            {output && <button onClick={copy} className="text-sm text-emerald-600 hover:text-emerald-800">{copied ? 'Copied!' : 'Copy'}</button>}
          </div>
          <textarea value={output} readOnly className="tool-textarea h-72 bg-gray-50" />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button onClick={process} className="btn-primary">Remove Duplicates</button>
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input type="checkbox" checked={caseSensitive} onChange={(e) => setCaseSensitive(e.target.checked)} className="rounded" />
          Case sensitive
        </label>
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input type="checkbox" checked={trimLines} onChange={(e) => setTrimLines(e.target.checked)} className="rounded" />
          Trim whitespace
        </label>
        {stats.removed > 0 && (
          <span className="text-sm text-gray-500">{stats.before} lines &rarr; {stats.after} lines ({stats.removed} removed)</span>
        )}
      </div>
    </div>
  )
}
