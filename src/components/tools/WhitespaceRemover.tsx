'use client'

import { useState } from 'react'

export default function WhitespaceRemover() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [copied, setCopied] = useState(false)

  const actions = [
    { label: 'Trim Lines', fn: (s: string) => s.split('\n').map((l) => l.trim()).join('\n') },
    { label: 'Remove Empty Lines', fn: (s: string) => s.split('\n').filter((l) => l.trim()).join('\n') },
    { label: 'Collapse Spaces', fn: (s: string) => s.replace(/[^\S\n]+/g, ' ') },
    { label: 'Remove All Whitespace', fn: (s: string) => s.replace(/\s+/g, '') },
    { label: 'Tabs to Spaces', fn: (s: string) => s.replace(/\t/g, '    ') },
    { label: 'Collapse Blank Lines', fn: (s: string) => s.replace(/\n{3,}/g, '\n\n') },
    { label: 'Clean All', fn: (s: string) => s.split('\n').map((l) => l.trim()).filter((l) => l).join('\n').replace(/[^\S\n]+/g, ' ') },
  ]

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
          <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Paste messy text here..." className="tool-textarea h-64" />
        </div>
        <div>
          <div className="mb-1 flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">Cleaned Output</label>
            {output && <button onClick={copy} className="text-sm text-emerald-600 hover:text-emerald-800">{copied ? 'Copied!' : 'Copy'}</button>}
          </div>
          <textarea value={output} readOnly className="tool-textarea h-64 bg-gray-50" />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {actions.map((a) => (
          <button key={a.label} onClick={() => setOutput(a.fn(input))} className={a.label === 'Clean All' ? 'btn-primary' : 'btn-ghost'}>
            {a.label}
          </button>
        ))}
      </div>
    </div>
  )
}
