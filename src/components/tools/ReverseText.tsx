'use client'

import { useState } from 'react'

export default function ReverseText() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [copied, setCopied] = useState(false)

  const reverseChars = () => setOutput(input.split('').reverse().join(''))
  const reverseWords = () => setOutput(input.split(/\s+/).reverse().join(' '))
  const reverseLines = () => setOutput(input.split('\n').reverse().join('\n'))
  const reverseEachWord = () => setOutput(input.split(/(\s+)/).map((w) => /\s/.test(w) ? w : w.split('').reverse().join('')).join(''))
  const flipUpsideDown = () => {
    const map: Record<string, string> = {
      a: '\u0250', b: 'q', c: '\u0254', d: 'p', e: '\u01DD', f: '\u025F', g: '\u0183',
      h: '\u0265', i: '\u0131', j: '\u027E', k: '\u029E', l: 'l', m: '\u026F', n: 'u',
      o: 'o', p: 'd', q: 'b', r: '\u0279', s: 's', t: '\u0287', u: 'n', v: '\u028C',
      w: '\u028D', x: 'x', y: '\u028E', z: 'z', '!': '\u00A1', '?': '\u00BF', '.': '\u02D9',
      ',': "'", "'": ',', '"': '\u201E', '(': ')', ')': '(', '[': ']', ']': '[', '{': '}', '}': '{',
    }
    setOutput(input.split('').reverse().map((c) => map[c.toLowerCase()] || c).join(''))
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
          <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter text to reverse..." className="tool-textarea h-48" />
        </div>
        <div>
          <div className="mb-1 flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">Output</label>
            {output && <button onClick={copy} className="text-sm text-emerald-600 hover:text-emerald-800">{copied ? 'Copied!' : 'Copy'}</button>}
          </div>
          <textarea value={output} readOnly className="tool-textarea h-48 bg-gray-50" />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button onClick={reverseChars} className="btn-primary">Reverse Characters</button>
        <button onClick={reverseWords} className="btn-primary">Reverse Words</button>
        <button onClick={reverseLines} className="btn-secondary">Reverse Lines</button>
        <button onClick={reverseEachWord} className="btn-secondary">Reverse Each Word</button>
        <button onClick={flipUpsideDown} className="btn-secondary">Flip Upside Down</button>
        <button onClick={() => { setInput(''); setOutput('') }} className="btn-ghost">Clear</button>
      </div>
    </div>
  )
}
