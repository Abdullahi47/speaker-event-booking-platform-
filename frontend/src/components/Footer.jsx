const exploreLinks = [
  { href: '#home', label: 'Home' },
  { href: '#find-speakers', label: 'Find speakers' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#events', label: 'Events' },
  { href: '#about-us', label: 'About us' },
]

const speakerLinks = [
  { href: `mailto:speakers@speakly.com?subject=${encodeURIComponent('Join as a speaker')}`, label: 'Join as a speaker' },
  { href: '#find-speakers', label: 'Browse categories' },
  { href: `mailto:hello@speakly.com?subject=${encodeURIComponent('Speakly enquiry')}`, label: 'Partner with us' },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 px-4 py-12 text-white sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <a className="inline-flex items-center gap-2.5 font-display text-xl font-extrabold tracking-tight" href="#home">
            <span className="grid size-9 -rotate-3 place-items-center rounded-[10px_4px_10px_4px] bg-brand text-lg text-white">S</span>
            Speakly
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            Connecting great speakers with great events across East Africa and beyond.
          </p>
        </div>

        <nav aria-label="Explore Speakly">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Explore</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <a className="transition-colors hover:text-white" href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="For speakers">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">For speakers</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {speakerLinks.map((link) => (
              <li key={link.label}>
                <a className="transition-colors hover:text-white" href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Contact</h2>
          <address className="mt-4 space-y-3 text-sm not-italic text-slate-300">
            <p>Zoobe KM4, Mogadishu, Somalia</p>
            <p>
              <a className="transition-colors hover:text-white" href="mailto:hello@speakly.com">hello@speakly.com</a>
            </p>
            <p>
              <a className="transition-colors hover:text-white" href="mailto:events@speakly.com">events@speakly.com</a>
            </p>
          </address>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-sm text-slate-400 md:flex-row md:text-left">
        <p>&copy; {currentYear} Speakly. All rights reserved.</p>
        <p>Built for organizers, speakers, and communities.</p>
      </div>
    </footer>
  )
}

export default Footer
