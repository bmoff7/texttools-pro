'use client'

import { useState, useMemo } from 'react'

function diffLines(a: string, b: string) {
  const linesA = a.split('\n')
  const linesB = b.split('\n')
  const result: { type: 'same' | 'added' | 'removed'; text: string }[] = []
  const max = Math.max(linesA.length, linesB.length)

  // Simple line-by-line comparison
  let ia = 0, ib = 0
  while (ia < linesA.length || ib < linesB.length) {
    if (ia < linesA.length && ib < linesB.length) {
      if (linesA[ia] === linesB[ib]) {
        result.push({ type: 'same', text: linesA[ia] })
        ia++; ib++
      } else {
        // Look ahead for match
        const matchInB = linesB.indexOf(linesA[ia], ib + 1)
        const matchInA = linesA.indexOf(linesB[ib], ia + 1)

        if (matchInB !== -1 && (matchInA === -1 || matchInB - ib <= matchInA - ia)) {
          while (ib < matchInB) {
            result.push({ type: 'added', text: linesB[ib] })
            ib++
          }
        } else if (matchInA !== -1) {
          while (ia < matchInA) {
            result.push({ type: 'removed', text: linesA[ia] })
            ia++
          }
        } else {
          result.push({ type: 'removed', text: linesA[ia] })
          result.push({ type: 'added', text: linesB[ib] })
          ia++; ib++
        }
      }
    } else if (ia < linesA.length) {
      result.push({ type: 'removed', text: linesA[ia] })
      ia++
    } else {
      result.push({ type: 'added', text: linesB[ib] })
      ib++
    }
  }
  return result
}

export default function TextDiff() {
  const [textA, setTextA] = useState('')
  const [textB, setTextB] = useState('')

  const diff = useMemo(() => diffLines(textA, textB), [textA, textB])
  const added = diff.filter((d) => d.type === 'added').length
  const removed = diff.filter((d) => d.type === 'removed').length

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 mb-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Original Text</label>
          <textarea value={textA} onChange={(e) => setTextA(e.target.value)} placeholder="Paste original text..." className="tool-textarea h-56" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Changed Text</label>
          <textarea value={textB} onChange={(e) => setTextB(e.target.value)} placeholder="Paste changed text..." className="tool-textarea h-56" />
        </div>
      </div>

      <div className="mb-3 flex gap-4 text-sm">
        <span className="text-red-600">- {removed} removed</span>
        <span className="text-green-600">+ {added} added</span>
        <button onClick={() => { setTextA(''); setTextB('') }} className="btn-ghost ml-auto">Clear</button>
      </div>

      {(textA || textB) && (
        <div className="rounded-lg border bg-white p-4 font-mono text-sm overflow-auto max-h-96">
          {diff.map((d, i) => (
            <div
              key={i}
              className={
                d.type === 'added' ? 'bg-green-50 text-green-800 border-l-2 border-green-400 pl-2' :
                d.type === 'removed' ? 'bg-red-50 text-red-800 border-l-2 border-red-400 pl-2 line-through' :
                'text-gray-600 pl-3'
              }
            >
              <span className="mr-2 text-gray-400">{d.type === 'added' ? '+' : d.type === 'removed' ? '-' : ' '}</span>
              {d.text || '\u00A0'}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
