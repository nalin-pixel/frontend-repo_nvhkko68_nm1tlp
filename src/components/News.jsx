import { Newspaper } from 'lucide-react'

const news = [
  { title: 'Global tournament announced', excerpt: 'Top teams face off for a $1M prize in a month-long showdown.', time: '2h ago' },
  { title: 'Indie spotlight: Mystic Valley', excerpt: 'A heartfelt journey through a hand-crafted open world.', time: '6h ago' },
  { title: 'Next-gen console update', excerpt: 'Performance boost and new accessibility features roll out.', time: '1d ago' },
]

export default function News() {
  return (
    <section id="news" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/20 text-blue-300">
            <Newspaper className="h-5 w-5" />
          </span>
          <h2 className="text-3xl font-bold text-white">Latest news</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {news.map((n) => (
            <article key={n.title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-200">{n.title}</h3>
              <p className="mt-2 text-slate-300">{n.excerpt}</p>
              <p className="mt-3 text-xs text-slate-400">{n.time}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
