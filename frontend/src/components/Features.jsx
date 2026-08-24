import SectionHeading from './SectionHeading'

const features = [
  {
    icon: '★',
    title: 'Expert Speakers',
    description: 'Learn from experienced speakers and industry leaders.',
  },
  {
    icon: '◇',
    title: 'Great Networking',
    description: 'Meet new people and build valuable connections.',
  },
  {
    icon: '↗',
    title: 'Useful Ideas',
    description: 'Discover simple ideas that can help your business grow.',
  },
]

function Features() {
  return (
    <section id="features" className="section bg-white text-slate-900">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Everything You Need in One Event"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-slate-200 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span aria-hidden="true" className="grid size-10 place-items-center rounded-lg bg-blue-50 text-xl text-blue-600">{feature.icon}</span>
              <h3 className="mt-4 font-display text-xl font-bold tracking-tight">{feature.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
