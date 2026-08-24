import { useEffect, useState } from 'react'

const navItems = ['Find speakers', 'Categories', 'How it works', 'About us']
const joinHref = `mailto:speakers@speakly.com?subject=${encodeURIComponent('Join as a speaker')}`

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white text-ink">
      <div className="mx-auto flex h-20 max-w-7xl items-center px-6 lg:px-8">
        <a className="flex items-center gap-2.5 font-display text-[22px] font-extrabold tracking-[-1px]" href="#home" aria-label="Speakly home">
          <span className="grid size-9 -rotate-3 place-items-center rounded-[10px_4px_10px_4px] bg-brand text-lg text-white">S</span>
          <span>Speakly</span>
        </a>

        <nav className="mx-auto hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex" aria-label="Main navigation">
          {navItems.map((item) => <NavLink item={item} key={item} />)}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100" type="button">Log in</button>
          <a className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-slate-800" href={joinHref}>Join as a speaker</a>
        </div>

        <button className="ml-auto grid size-11 place-items-center rounded-lg transition hover:bg-slate-100 md:hidden" type="button" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          <span className="space-y-1.5"><i className="block h-0.5 w-6 bg-current"/><i className="block h-0.5 w-6 bg-current"/><i className="block h-0.5 w-6 bg-current"/></span>
        </button>

        {menuOpen && (
          <nav className="absolute top-[72px] right-4 left-4 flex flex-col rounded-2xl border border-slate-200 bg-white p-3 text-slate-700 shadow-xl md:hidden">
            {navItems.map((item) => <NavLink item={item} key={item} onClick={() => setMenuOpen(false)} mobile />)}
            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-slate-100 pt-3">
              <button className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold" type="button">Log in</button>
              <a className="rounded-xl bg-slate-950 px-4 py-3 text-center text-sm font-bold text-white hover:bg-slate-800" href={joinHref} onClick={() => setMenuOpen(false)}>Join as speaker</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

function NavLink({ item, mobile = false, onClick }) {
  const href = `#${item.toLowerCase().replaceAll(' ', '-')}`
  return <a className={mobile ? 'rounded-lg px-4 py-3 text-sm font-semibold hover:bg-slate-100 hover:text-brand' : 'transition-colors hover:text-brand'} href={href} onClick={onClick}>{item}</a>
}

export default Header
