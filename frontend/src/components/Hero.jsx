import speakerImage from '../assets/keynote-speaker.png'

function Hero() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-6 py-16 md:flex md:items-center md:justify-between lg:px-8">
      <div className="max-w-xl">
        <p className="mb-4 text-lg text-slate-300">
          Business Event - 2026
        </p>

        <h1 className="text-5xl font-bold leading-tight md:text-6xl">
          Innovate Engage Conferences
        </h1>

        <address className="mt-6 not-italic text-slate-300">
          Zoobe KM4, Mogadishu, Somalia
        </address>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#features" className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700">
            Discover More
          </a>

          <a href="#events" className="rounded-lg bg-lime-300 px-6 py-3 font-semibold text-slate-900 hover:bg-lime-400">
            Join Event
          </a>
        </div>
      </div>

      <div className="mt-10 md:mt-0 md:w-1/2">
        <img
          src={speakerImage}
          alt="Keynote speaker presenting on stage at a Speakly conference"
          className="w-full max-h-[550px] object-contain"
        />
      </div>
    </section>
  )
}

export default Hero
