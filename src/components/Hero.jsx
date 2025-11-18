import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_-20%,rgba(139,92,246,0.20),transparent),radial-gradient(800px_400px_at_80%_120%,rgba(59,130,246,0.20),transparent)]" />

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/jQwvQSncGp8maF9S/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-black tracking-tight text-white drop-shadow-[0_6px_40px_rgba(139,92,246,0.35)]"
          >
            Play beyond limits
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-4 text-lg text-slate-200/90"
          >
            Discover trending titles, compete with friends, and explore immersive worlds. Your new gaming hub is here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#trending" className="inline-flex items-center rounded-2xl bg-violet-600 px-6 py-3 text-white shadow-[0_0_40px_rgba(139,92,246,0.35)] hover:bg-violet-500 transition">
              Browse games
            </a>
            <a href="#news" className="inline-flex items-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-slate-100 hover:bg-white/10 transition">
              Latest news
            </a>
          </motion.div>
        </div>

        <div className="md:col-span-6" />
      </div>
    </section>
  )
}
