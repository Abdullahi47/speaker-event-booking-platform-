import SectionHeading from './SectionHeading'

const steps = [
  {
    number: '01',
    title: 'Search',
    description: 'Find speakers by name, topic, or category. Filter the list until it matches your event brief.',
  },
  {
    number: '02',
    title: 'Compare',
    description: 'Review experience, rates, and expertise side by side before you choose who to invite.',
  },
  {
    number: '03',
    title: 'Book',
    description: 'Send a booking request and coordinate dates, format, and event details in one conversation.',
  },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="section bg-slate-100 text-slate-900">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How It Works"
          title="Book a speaker in three steps"
          copy="From the first search to a confirmed booking, Speakly keeps the process short and easy to follow."
        />

        <ol className="relative mt-12 grid gap-6 md:grid-cols-3 md:before:pointer-events-none md:before:absolute md:before:top-10 md:before:right-[16%] md:before:left-[16%] md:before:h-px md:before:bg-slate-300">
          {steps.map((step) => (
            <li
              className="relative rounded-xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              key={step.number}
            >
              <span className="grid size-12 place-items-center rounded-full bg-blue-600 text-sm font-bold text-white">
                {step.number}
              </span>
              <h3 className="mt-5 font-display text-xl font-bold tracking-tight">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default HowItWorks
