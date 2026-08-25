import Button from './Button'
import SectionHeading from './SectionHeading'

const events = [
  {
    date: '12 Sep',
    dateTime: '2026-09-12',
    title: 'Business Growth Conference',
    description: 'Practical strategies for founders ready to scale sustainable companies.',
    category: 'Business',
    location: 'Hargeisa, Somaliland',
  },
  {
    date: '20 Oct',
    dateTime: '2026-10-20',
    title: 'Technology and Innovation',
    description: 'Explore emerging technology with the builders shaping East Africa.',
    category: 'Technology',
    location: 'Mogadishu, Somalia',
  },
  {
    date: '05 Nov',
    dateTime: '2026-11-05',
    title: 'Young Leaders Summit',
    description: 'Connect with ambitious young leaders turning ideas into community impact.',
    category: 'Leadership',
    location: 'Nairobi, Kenya',
  },
]

function Events() {
  return (
    <section id="events" className="section bg-slate-100 text-slate-900">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Upcoming Events"
          title="Join Our Next Event"
        />

        {events.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <h3 className="font-display text-xl font-bold">No upcoming events yet</h3>
            <p className="mx-auto mt-2 max-w-md text-slate-600">
              New conferences will appear here. In the meantime, you can still request a speaker for your own event.
            </p>
            <Button as="a" className="mt-6" href="#about-us">Request a speaker</Button>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {events.map((event) => (
              <article className="flex h-full flex-col rounded-xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg" key={event.title}>
                <div className="flex items-start justify-between gap-3">
                  <time className="font-bold text-blue-600" dateTime={event.dateTime}>{event.date}</time>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{event.category}</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold tracking-tight">{event.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{event.description}</p>
                <p className="mt-2 text-slate-600">{event.location}</p>
                <Button as="a" className="mt-auto w-full" href={`mailto:events@speakly.com?subject=${encodeURIComponent(event.title)}`}>
                  View Event
                </Button>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Events
