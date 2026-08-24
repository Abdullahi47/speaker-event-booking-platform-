import BookingForm from './BookingForm'
import Button from './Button'
import SectionHeading from './SectionHeading'

const stats = [
  { value: '120+', label: 'Vetted speakers' },
  { value: '18', label: 'Event cities' },
  { value: '4.9/5', label: 'Organizer rating' },
]

const values = [
  {
    title: 'For organizers',
    description: 'Shortlist speakers by topic, experience, and rate, then send a booking request in one place.',
  },
  {
    title: 'For speakers',
    description: 'Publish a profile that highlights expertise, availability, and past events so the right rooms find you.',
  },
  {
    title: 'For communities',
    description: 'Bring conferences, workshops, and local programs the voices that actually match the audience.',
  },
]

function About() {
  return (
    <section id="about-us" className="section bg-white text-slate-900">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <SectionHeading
              align="left"
              eyebrow="About Us"
              title="Connecting great speakers with great events"
              copy="Speakly helps organizers discover and book speakers for conferences, workshops, and community programs. Speakers can join with a profile that highlights their expertise, experience, and availability."
            />
            <p className="mt-4 max-w-2xl text-slate-600">
              We started in East Africa with one goal: make it easier to find a speaker who fits the brief, the budget, and the audience — without weeks of back-and-forth.
            </p>
            <Button
              as="a"
              className="mt-8"
              href={`mailto:hello@speakly.com?subject=${encodeURIComponent('Speakly enquiry')}`}
            >
              Contact us
            </Button>
          </div>

          <dl className="grid grid-cols-1 gap-4 rounded-2xl bg-slate-50 p-6 sm:grid-cols-3 sm:p-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <li key={value.title} className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-display text-lg font-bold tracking-tight">{value.title}</h3>
              <p className="mt-3 text-slate-600">{value.description}</p>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Book a speaker"
              title="Tell us about your event"
              copy="Share a few details and we will help you shortlist speakers that fit your audience, format, and budget."
              titleAs="h3"
            />
          </div>
          <BookingForm />
        </div>
      </div>
    </section>
  )
}

export default About
