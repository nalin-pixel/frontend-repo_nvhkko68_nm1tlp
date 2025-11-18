import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trending from './components/Trending'
import News from './components/News'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_10%_-10%,rgba(99,102,241,0.15),transparent),radial-gradient(1000px_600px_at_110%_10%,rgba(56,189,248,0.12),transparent)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Trending />
        <News />
        <footer className="border-t border-white/10 py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 text-slate-400 text-sm">
            © 2025 NovaPlay. All trademarks are property of their respective owners.
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
