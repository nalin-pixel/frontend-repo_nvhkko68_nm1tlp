import { Star, Flame, Trophy } from 'lucide-react'

const games = [
  { title: 'Nebula Riders', genre: 'Racing • Sci-Fi', rating: 4.8, tag: 'Hot' },
  { title: 'Echoes of Myth', genre: 'Action RPG', rating: 4.7, tag: 'New' },
  { title: 'Circuit Clash', genre: 'Arena • Multiplayer', rating: 4.6, tag: 'Esports' },
  { title: 'Mystic Valley', genre: 'Adventure', rating: 4.5, tag: 'Indie' },
]

export default function Trending() {
  return (
    <section id="trending" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">Trending now</h2>
            <p className="mt-1 text-slate-300">Fresh drops and community favorites</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:bg-white/10">
            View all
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {games.map((g) => (
            <div key={g.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/70 to-slate-900/70 p-5">
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(400px_200px_at_0%_0%,rgba(139,92,246,0.2),transparent),radial-gradient(400px_200px_at_100%_100%,rgba(59,130,246,0.2),transparent)]" />

              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                  <Flame className="h-3.5 w-3.5 text-violet-400" />
                  {g.tag}
                </div>
                <h3 className="text-lg font-semibold text-white">{g.title}</h3>
                <p className="text-sm text-slate-300">{g.genre}</p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-black/30 px-3 py-1 text-sm text-slate-200">
                  <Star className="h-4 w-4 text-yellow-400" />
                  {g.rating}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
