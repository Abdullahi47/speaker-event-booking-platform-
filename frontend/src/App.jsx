import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2.5 font-display text-[22px] font-extrabold tracking-[-1px] text-ink" aria-label="Speakly home">
          <span className="grid size-9 -rotate-3 place-items-center rounded-[10px_4px_10px_4px] bg-brand text-lg text-white">S</span>
          peaker and events booking platform
        </a>

        <nav className="mx-auto hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex" aria-label="Main navigation">
          <a className="transition-colors hover:text-brand" href="#speakers">Find speakers</a>
          <a className="transition-colors hover:text-brand" href="#categories">Categories</a>
          <a className="transition-colors hover:text-brand" href="#how-it-works">How it works</a>
          <a className="transition-colors hover:text-brand" href="#about">About us</a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100" type="button">Log in</button>
          <button className="rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-brand-dark" type="button">Join as a speaker</button>
        </div>

        <button className="ml-auto grid size-11 place-items-center rounded-lg text-ink transition hover:bg-slate-100 md:hidden" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          <span className="sr-only">Menu</span>
          <span className="space-y-1.5"><span className="block h-0.5 w-6 bg-current"/><span className="block h-0.5 w-6 bg-current"/><span className="block h-0.5 w-6 bg-current"/></span>
        </button>
      </div>

      {menuOpen && (
        <nav className="absolute top-[72px] right-4 left-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl md:hidden" aria-label="Mobile navigation">
          {[['Find speakers', '#speakers'], ['Categories', '#categories'], ['How it works', '#how-it-works'], ['About us', '#about']].map(([label, href]) => (
            <a key={label} className="block rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-brand" href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <div className="mt-2 grid grid-cols-2 gap-2 border-t border-slate-100 pt-3">
            <button className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold" type="button">Log in</button>
            <button className="rounded-xl bg-brand px-4 py-3 text-sm font-bold text-white" type="button">Join as speaker</button>
          </div>
        </nav>
      )}
    </header>
  )
}

export default App
