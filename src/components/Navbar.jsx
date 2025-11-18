import { useState } from 'react'
import { Menu, X, Gamepad2, Search, User } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Trending', href: '#trending' },
    { label: 'News', href: '#news' },
    { label: 'Communities', href: '#communities' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6">
            <a href="#" className="inline-flex items-center gap-2 text-white">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600 shadow-[0_0_30px_rgba(139,92,246,0.6)]">
                <Gamepad2 className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold tracking-tight">NovaPlay</span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
              {navItems.map((n) => (
                <a key={n.label} href={n.href} className="hover:text-white transition-colors">
                  {n.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-white/10 transition">
                <Search className="h-4 w-4" />
                Search
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-3 py-2 text-sm font-semibold text-white hover:bg-violet-500 transition">
                <User className="h-4 w-4" />
                Sign in
              </button>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 text-slate-200">
              <nav className="grid gap-2">
                {navItems.map((n) => (
                  <a key={n.label} href={n.href} className="rounded-lg px-2 py-2 hover:bg-white/5">
                    {n.label}
                  </a>
                ))}
              </nav>
              <div className="mt-3 flex gap-2">
                <button className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">Search</button>
                <button className="flex-1 rounded-xl bg-violet-600 px-3 py-2 text-sm font-semibold text-white">Sign in</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
