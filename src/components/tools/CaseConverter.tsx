'use client'

import { useState } from 'react'

function toSentenceCase(s: string) {
  return s.toLowerCase().replace(/(^\s*|[.!?]\s+)(\w)/g, (_, p, c) => p + c.toUpperCase())
}

function toTitleCase(s: string) {
  return s.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())
}

function toAlternating(s: string) {
  let upper = true
  return s.split('').map((c) => {
    if (/[a-z]/i.test(c)) {
      const r = upper ? c.toUpperCase() : c.toLowerCase()
      upper = !upper
      return r
    }
    return c
  }).join('')
}

function toInverse(s: string) {
  return s.split('').map((c) => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('')
}

export default function CaseConverter() {
  const [text, setText] = useState('')
  const [copied, setCopied] = useState(false)

  const apply = (fn: (s: string) => string) => setText(fn(text))

  const copy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
        className="tool-textarea h-64 mb-4"
      />

      <div className="flex flex-wrap gap-2 mb-4">
        <button onClick={() => apply((s) => s.toLowerCase())} className="btn-primary">lowercase</button>
        <button onClick={() => apply((s) => s.toUpperCase())} className="btn-primary">UPPERCASE</button>
        <button onClick={() => apply(toTitleCase)} className="btn-primary">Title Case</button>
        <button onClick={() => apply(toSentenceCase)} className="btn-primary">Sentence case</button>
        <button onClick={() => apply(toAlternating)} className="btn-secondary">aLtErNaTiNg</button>
        <button onClick={() => apply(toInverse)} className="btn-secondary">iNVERSE</button>
        <button onClick={copy} className="btn-ghost">{copied ? 'Copied!' : 'Copy'}</button>
        <button onClick={() => setText('')} className="btn-ghost">Clear</button>
      </div>

      <div className="text-sm text-gray-400">
        {text.trim().split(/\s+/).filter(Boolean).length} words &middot; {text.length} characters
      </div>
    </div>
  )
}
