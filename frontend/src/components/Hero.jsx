import speakerImage from '../assets/keynote-speaker.png'
import Button from './Button'

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-blue-600/25 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-lime-300/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:gap-10 md:py-16 lg:px-8 lg:py-24">
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-lime-300">
            <span className="size-2 rounded-full bg-lime-300" aria-hidden="true" />
            Business Event · 2026
          </p>

          <h1 className="mt-5 font-display text-[2rem] font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Innovate Engage Conferences
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Discover vetted keynote speakers, compare expertise, and book the right voice for your next conference, workshop, or community program.
          </p>

          <address className="mt-6 not-italic text-slate-300">
            Zoobe KM4, Mogadishu, Somalia
          </address>

          <dl className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">When</dt>
              <dd className="mt-1 font-semibold text-white">12–14 Sep 2026</dd>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">Where</dt>
              <dd className="mt-1 font-semibold text-white">Mogadishu</dd>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">Format</dt>
              <dd className="mt-1 font-semibold text-white">In person</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button as="a" variant="primary" href="#features">
              Discover More
            </Button>
            <Button as="a" variant="accent" href="#events">
              Join Event
            </Button>
          </div>

          <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
            <span><strong className="font-semibold text-white">120+</strong> speakers</span>
            <span><strong className="font-semibold text-white">40</strong> sessions</span>
            <span><strong className="font-semibold text-white">2,000+</strong> attendees</span>
          </p>
        </div>

        <div className="relative">
          <div aria-hidden="true" className="absolute inset-10 rounded-full bg-blue-500/20 blur-3xl" />
          <img
            src={speakerImage}
            alt="Keynote speaker presenting on stage at a Speakly conference"
            className="relative mx-auto w-full max-h-[550px] object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
