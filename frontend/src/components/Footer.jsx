function Footer() {
  return (
    <footer className="bg-slate-950 px-6 py-10 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
        <div>
          <h2 className="text-xl font-bold">Speakly</h2>
          <p className="mt-2 text-sm text-slate-400">
            Connecting great speakers with great events
          </p>
        </div>

        <p className="text-sm text-slate-400">
          &copy; 2026 Speakly. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
