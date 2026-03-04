'use client'

import { useState, useMemo } from 'react'

export default function FindReplace() {
  const [text, setText] = useState('')
  const [find, setFind] = useState('')
  const [replace, setReplace] = useState('')
  const [useRegex, setUseRegex] = useState(false)
  const [caseSensitive, setCaseSensitive] = useState(false)
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState('')

  const matchCount = useMemo(() => {
    if (!find || !text) return 0
    try {
      setError('')
      const flags = caseSensitive ? 'g' : 'gi'
      const re = useRegex ? new RegExp(find, flags) : new RegExp(find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags)
      return (text.match(re) || []).length
    } catch (e: any) {
      setError(e.message)
      return 0
    }
  }, [text, find, caseSensitive, useRegex])

  const doReplace = () => {
    if (!find) return
    try {
      const flags = caseSensitive ? 'g' : 'gi'
      const re = useRegex ? new RegExp(find, flags) : new RegExp(find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags)
      setText(text.replace(re, replace))
      setError('')
    } catch (e: any) {
      setError(e.message)
    }
  }

  const copy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div>
      <div className="mb-4 grid gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Find</label>
          <input value={find} onChange={(e) => setFind(e.target.value)} placeholder="Text to find..." className="w-full rounded-lg border px-4 py-2 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Replace with</label>
          <input value={replace} onChange={(e) => setReplace(e.target.value)} placeholder="Replacement text..." className="w-full rounded-lg border px-4 py-2 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500" />
        </div>
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <button onClick={doReplace} className="btn-primary">Replace All</button>
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input type="checkbox" checked={useRegex} onChange={(e) => setUseRegex(e.target.checked)} className="rounded" /> Regex
        </label>
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input type="checkbox" checked={caseSensitive} onChange={(e) => setCaseSensitive(e.target.checked)} className="rounded" /> Case sensitive
        </label>
        {find && <span className="text-sm text-gray-500">{matchCount} match{matchCount !== 1 ? 'es' : ''} found</span>}
        <button onClick={copy} className="btn-ghost ml-auto">{copied ? 'Copied!' : 'Copy'}</button>
      </div>

      {error && <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</div>}

      <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter your text here..." className="tool-textarea h-72" />
    </div>
  )
}
