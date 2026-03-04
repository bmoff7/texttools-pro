import Link from 'next/link'

const tools = [
  { name: 'Word & Character Counter', desc: 'Count words, characters, sentences, and paragraphs instantly', href: '/tools/word-counter', icon: '123' },
  { name: 'Case Converter', desc: 'Convert text to UPPER, lower, Title, or Sentence case', href: '/tools/case-converter', icon: 'Aa' },
  { name: 'Text Diff', desc: 'Compare two texts and highlight the differences', href: '/tools/text-diff', icon: '+/-' },
  { name: 'Remove Duplicate Lines', desc: 'Remove duplicate lines and keep only unique text', href: '/tools/remove-duplicates', icon: '==' },
  { name: 'Sort Lines', desc: 'Sort lines alphabetically, numerically, or randomly', href: '/tools/sort-lines', icon: 'A-Z' },
  { name: 'Find & Replace', desc: 'Find and replace text with regex support', href: '/tools/find-replace', icon: 'F/R' },
  { name: 'Slug Generator', desc: 'Convert text to URL-friendly slugs', href: '/tools/slug-generator', icon: '/--/' },
  { name: 'Word Frequency Counter', desc: 'Analyze word frequency and most common words', href: '/tools/word-frequency', icon: '#1' },
  { name: 'Whitespace Remover', desc: 'Clean up extra spaces, tabs, and blank lines', href: '/tools/whitespace-remover', icon: '_ _' },
  { name: 'Reverse Text', desc: 'Reverse text, words, or lines instantly', href: '/tools/reverse-text', icon: '\u21C4' },
]

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-gray-900">Free Online Text Tools</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Powerful text manipulation tools for writers, students, and developers. Everything runs in your browser &mdash; your text stays private.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Link key={tool.href} href={tool.href} className="group rounded-xl border bg-white p-6 shadow-sm transition hover:border-emerald-300 hover:shadow-md">
            <div className="mb-3 inline-block rounded-lg bg-emerald-50 px-3 py-1 font-mono text-lg text-emerald-600">{tool.icon}</div>
            <h2 className="mb-1 text-lg font-semibold group-hover:text-emerald-600">{tool.name}</h2>
            <p className="text-sm text-gray-500">{tool.desc}</p>
          </Link>
        ))}
      </section>

      <section className="mt-20 text-center">
        <h2 className="mb-4 text-2xl font-bold">Why TextTools Pro?</h2>
        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-3">
          <div>
            <div className="mb-2 text-3xl">&#x1f512;</div>
            <h3 className="font-semibold">100% Private</h3>
            <p className="text-sm text-gray-500">Your text never leaves your browser. No server processing.</p>
          </div>
          <div>
            <div className="mb-2 text-3xl">&#x26a1;</div>
            <h3 className="font-semibold">Instant Results</h3>
            <p className="text-sm text-gray-500">Real-time processing as you type. No waiting.</p>
          </div>
          <div>
            <div className="mb-2 text-3xl">&#x2705;</div>
            <h3 className="font-semibold">No Sign-up</h3>
            <p className="text-sm text-gray-500">Just open and use. No accounts, no limits, no fees.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
