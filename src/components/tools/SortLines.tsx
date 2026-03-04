'use client'

import { useState } from 'react'

export default function SortLines() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [copied, setCopied] = useState(false)

  const sort = (mode: 'asc' | 'desc' | 'random' | 'length' | 'numeric' | 'reverse') => {
    const lines = input.split('\n')
    let sorted: string[]
    switch (mode) {
      case 'asc': sorted = [...lines].sort((a, b) => a.localeCompare(b)); break
      case 'desc': sorted = [...lines].sort((a, b) => b.localeCompare(a)); break
      case 'random': sorted = [...lines].sort(() => Math.random() - 0.5); break
      case 'length': sorted = [...lines].sort((a, b) => a.length - b.length); break
      case 'numeric': sorted = [...lines].sort((a, b) => (parseFloat(a) || 0) - (parseFloat(b) || 0)); break
      case 'reverse': sorted = [...lines].reverse(); break
    }
    setOutput(sorted.join('\n'))
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
          <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter text (one item per line)..." className="tool-textarea h-72" />
        </div>
        <div>
          <div className="mb-1 flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">Sorted Output</label>
            {output && <button onClick={copy} className="text-sm text-emerald-600 hover:text-emerald-800">{copied ? 'Copied!' : 'Copy'}</button>}
          </div>
          <textarea value={output} readOnly className="tool-textarea h-72 bg-gray-50" />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button onClick={() => sort('asc')} className="btn-primary">A &rarr; Z</button>
        <button onClick={() => sort('desc')} className="btn-primary">Z &rarr; A</button>
        <button onClick={() => sort('numeric')} className="btn-secondary">Numeric</button>
        <button onClick={() => sort('length')} className="btn-secondary">By Length</button>
        <button onClick={() => sort('random')} className="btn-secondary">Shuffle</button>
        <button onClick={() => sort('reverse')} className="btn-ghost">Reverse</button>
        <button onClick={() => { setInput(''); setOutput('') }} className="btn-ghost">Clear</button>
      </div>
    </div>
  )
}
