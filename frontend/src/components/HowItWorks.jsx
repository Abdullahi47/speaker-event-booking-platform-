const steps = [
  {
    title: '1. Search',
    description: 'Find speakers by name, topic, or category.',
  },
  {
    title: '2. Compare',
    description: 'Review experience, rates, and expertise before you choose.',
  },
  {
    title: '3. Book',
    description: 'Send a booking request and coordinate the event details.',
  },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-slate-100 px-6 py-16 text-slate-900 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-semibold text-blue-600">How It Works</p>
          <h2 className="mt-2 text-3xl font-bold">Book a speaker in three steps</h2>
        </div>

        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <li className="rounded-xl bg-white p-6 shadow-sm" key={step.title}>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-slate-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default HowItWorks
