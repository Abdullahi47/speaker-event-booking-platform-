function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 px-6 py-10 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
        <div>
          <h2 className="text-xl font-bold">Speakly</h2>
          <p className="mt-2 text-sm text-slate-400">
            Connecting great speakers with great events
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-5 text-sm text-slate-300">
          <a className="hover:text-white" href="#home">Home</a>
          <a className="hover:text-white" href="#find-speakers">Find speakers</a>
          <a className="hover:text-white" href="#how-it-works">How it works</a>
          <a className="hover:text-white" href="#events">Events</a>
          <a className="hover:text-white" href="#about-us">About us</a>
        </nav>

        <p className="text-sm text-slate-400">
          &copy; {currentYear} Speakly. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
