import { useEffect, useRef, useState } from 'react'
import Button from './Button'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'find-speakers', label: 'Find speakers' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'events', label: 'Events' },
  { id: 'about-us', label: 'About us' },
]

const joinHref = `mailto:speakers@speakly.com?subject=${encodeURIComponent('Join as a speaker')}`
const loginHref = `mailto:hello@speakly.com?subject=${encodeURIComponent('Request Speakly access')}`

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')
  const menuButtonRef = useRef(null)
  const mobileNavRef = useRef(null)
  const loginDialogRef = useRef(null)
  const loginOpenRef = useRef(false)
  loginOpenRef.current = loginOpen

  useEffect(() => {
    if (!menuOpen) return undefined

    const nav = mobileNavRef.current
    const focusable = nav?.querySelectorAll('a, button')
    focusable?.[0]?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        return
      }

      if (event.key !== 'Tab' || !focusable?.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      if (!loginOpenRef.current) menuButtonRef.current?.focus()
    }
  }, [menuOpen])

  useEffect(() => {
    if (!loginOpen) return undefined

    const dialog = loginDialogRef.current
    const focusable = dialog?.querySelectorAll('a, button')
    focusable?.[0]?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setLoginOpen(false)
        return
      }

      if (event.key !== 'Tab' || !focusable?.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [loginOpen])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    if (sections.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.1, 0.35, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  function openLogin() {
    setMenuOpen(false)
    setLoginOpen(true)
  }

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white text-ink">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:h-20 sm:px-6 lg:px-8">
        <a className="flex items-center gap-2.5 font-display text-[22px] font-extrabold tracking-[-1px]" href="#home" aria-label="Speakly home">
          <span className="grid size-9 -rotate-3 place-items-center rounded-[10px_4px_10px_4px] bg-brand text-lg text-white">S</span>
          <span>Speakly</span>
        </a>

        <nav className="mx-auto hidden items-center gap-7 text-sm font-semibold text-slate-600 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink item={item} key={item.id} active={activeId === item.id} />
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-3 md:flex lg:ml-0">
          <button className="rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100" type="button" onClick={openLogin}>
            Log in
          </button>
          <Button as="a" className="rounded-xl px-5 shadow-lg shadow-slate-300" href={joinHref}>
            Join as a speaker
          </Button>
        </div>

        <button
          ref={menuButtonRef}
          className="ml-auto grid size-11 place-items-center rounded-lg transition hover:bg-slate-100 lg:hidden"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="space-y-1.5" aria-hidden="true">
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
          </span>
        </button>
      </div>

      {menuOpen && (
        <nav
          ref={mobileNavRef}
          id="mobile-nav"
          className="flex flex-col border-t border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-lg lg:hidden"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <NavLink item={item} key={item.id} active={activeId === item.id} onClick={() => setMenuOpen(false)} mobile />
          ))}
          <div className="mt-2 grid grid-cols-1 gap-2 border-t border-slate-100 pt-3 sm:grid-cols-2">
            <Button variant="ghost" className="rounded-xl" type="button" onClick={openLogin}>Log in</Button>
            <Button as="a" className="rounded-xl" href={joinHref} onClick={() => setMenuOpen(false)}>Join as speaker</Button>
          </div>
        </nav>
      )}

      {loginOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/50 p-4" onClick={() => setLoginOpen(false)}>
          <div
            ref={loginDialogRef}
            className="w-full max-w-md rounded-2xl bg-white p-6 text-slate-900 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="login-title"
            onClick={(event) => event.stopPropagation()}
          >
            <h2 id="login-title" className="font-display text-xl font-bold">Log in to Speakly</h2>
            <p className="mt-2 text-slate-600">
              Organizer and speaker accounts are currently invite-only. Request access and we will email you a sign-in link.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button as="a" href={loginHref}>Request access</Button>
              <Button variant="ghost" type="button" onClick={() => setLoginOpen(false)}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({ item, active = false, mobile = false, onClick }) {
  return (
    <a
      className={
        mobile
          ? `rounded-lg px-4 py-3 text-sm font-semibold hover:bg-slate-100 hover:text-brand ${active ? 'bg-slate-100 text-brand' : ''}`
          : `border-b-2 py-1 transition-colors hover:text-brand ${active ? 'border-brand text-brand' : 'border-transparent'}`
      }
      href={`#${item.id}`}
      aria-current={active ? 'location' : undefined}
      onClick={onClick}
    >
      {item.label}
    </a>
  )
}

export default Header
