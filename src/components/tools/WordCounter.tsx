'use client'

import { useState, useMemo } from 'react'

export default function WordCounter() {
  const [text, setText] = useState('')

  const stats = useMemo(() => {
    const trimmed = text.trim()
    const words = trimmed ? trimmed.split(/\s+/).length : 0
    const chars = text.length
    const charsNoSpaces = text.replace(/\s/g, '').length
    const sentences = trimmed ? (trimmed.match(/[.!?]+(\s|$)/g) || []).length || (trimmed.length > 0 ? 1 : 0) : 0
    const paragraphs = trimmed ? trimmed.split(/\n\s*\n/).filter(Boolean).length : 0
    const readingTime = Math.max(1, Math.ceil(words / 200))
    const speakingTime = Math.max(1, Math.ceil(words / 130))
    return { words, chars, charsNoSpaces, sentences, paragraphs, readingTime, speakingTime }
  }, [text])

  return (
    <div>
      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
        {[
          { label: 'Words', value: stats.words },
          { label: 'Characters', value: stats.chars },
          { label: 'No Spaces', value: stats.charsNoSpaces },
          { label: 'Sentences', value: stats.sentences },
          { label: 'Paragraphs', value: stats.paragraphs },
          { label: 'Reading', value: `${stats.readingTime} min` },
          { label: 'Speaking', value: `${stats.speakingTime} min` },
        ].map((s) => (
          <div key={s.label} className="rounded-lg bg-white border p-3 text-center">
            <div className="text-2xl font-bold text-emerald-600">{s.value}</div>
            <div className="text-xs text-gray-500">{s.label}</div>
          </div>
        ))}
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing or paste your text here..."
        className="tool-textarea h-80"
        autoFocus
      />

      <div className="mt-3 flex gap-2">
        <button onClick={() => setText('')} className="btn-ghost">Clear</button>
        <button onClick={() => navigator.clipboard.writeText(text)} className="btn-ghost">Copy</button>
        <button onClick={() => setText(text.toUpperCase())} className="btn-ghost">UPPER</button>
        <button onClick={() => setText(text.toLowerCase())} className="btn-ghost">lower</button>
      </div>
    </div>
  )
}
