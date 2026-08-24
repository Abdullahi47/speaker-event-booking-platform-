const features = [
  {
    title: 'Expert Speakers',
    description: 'Learn from experienced speakers and industry leaders.',
  },
  {
    title: 'Great Networking',
    description: 'Meet new people and build valuable connections.',
  },
  {
    title: 'Useful Ideas',
    description: 'Discover simple ideas that can help your business grow.',
  },
]

function Features() {
  return (
    <section id="features" className="scroll-mt-20 bg-white px-6 py-16 text-slate-900 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-semibold text-blue-600">Why Choose Us</p>
          <h2 className="mt-2 text-3xl font-bold">
            Everything You Need in One Event
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-slate-200 p-6"
            >
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-3 text-slate-600">
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
