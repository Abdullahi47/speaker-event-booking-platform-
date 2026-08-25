import Button from './Button'
import SectionHeading from './SectionHeading'

const events = [
  {
    date: '12 Sep',
    dateTime: '2026-09-12',
    fullDate: 'September 12, 2026',
    time: '9:00 AM – 4:00 PM',
    venue: 'Hargeisa Cultural Centre',
    format: 'In person',
    seatsLeft: 42,
    title: 'Business Growth Conference',
    description: 'Practical strategies for founders ready to scale sustainable companies.',
    category: 'Business',
    location: 'Hargeisa, Somaliland',
  },
  {
    date: '20 Oct',
    dateTime: '2026-10-20',
    fullDate: 'October 20, 2026',
    time: '10:00 AM – 5:00 PM',
    venue: 'Jazeera Palace',
    format: 'Hybrid',
    seatsLeft: 68,
    title: 'Technology and Innovation',
    description: 'Explore emerging technology with the builders shaping East Africa.',
    category: 'Technology',
    location: 'Mogadishu, Somalia',
  },
  {
    date: '05 Nov',
    dateTime: '2026-11-05',
    fullDate: 'November 5, 2026',
    time: '8:30 AM – 3:30 PM',
    venue: 'KICC',
    format: 'In person',
    seatsLeft: 25,
    title: 'Young Leaders Summit',
    description: 'Connect with ambitious young leaders turning ideas into community impact.',
    category: 'Leadership',
    location: 'Nairobi, Kenya',
  },
]

function Events() {
  const eventCount = events.length
  const getEnquiryLink = (event) => {
    const subject = encodeURIComponent(`Event enquiry: ${event.title}`)
    const body = encodeURIComponent(`Hello Speakly team,\n\nI would like to learn more about ${event.title} on ${event.fullDate}.`)

    return `mailto:events@speakly.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="events" className="section bg-slate-100 text-slate-900">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          copy={`Choose from ${eventCount} upcoming experiences designed to help you learn, connect, and lead.`}
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
            {events.map((event, index) => (
              <article aria-labelledby={`event-title-${index}`} className="flex h-full flex-col rounded-xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg" key={event.title}>
                <div className="flex items-start justify-between gap-3">
                  <time aria-label={event.fullDate} className="font-bold text-blue-600" dateTime={event.dateTime}>{event.date}</time>
                  <div className="flex gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{event.format}</span>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{event.category}</span>
                  </div>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold tracking-tight" id={`event-title-${index}`}>{event.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{event.description}</p>
                <p className="mt-3 text-sm font-medium text-slate-700">{event.time}</p>
                <p className="mt-2 font-medium text-slate-800">{event.venue}</p>
                <p className="mt-1 text-sm text-slate-600">{event.location}</p>
                <p className="mt-3 text-sm font-semibold text-emerald-700">{event.seatsLeft} seats remaining</p>
                <Button aria-label={`Enquire about ${event.title}`} as="a" className="mt-auto w-full" href={getEnquiryLink(event)}>
                  View Event
                  <span aria-hidden="true">→</span>
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
