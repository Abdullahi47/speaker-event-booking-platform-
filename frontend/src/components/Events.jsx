const events = [
  {
    date: '12 Sep',
    dateTime: '2026-09-12',
    title: 'Business Growth Conference',
    location: 'Hargeisa, Somaliland',
  },
  {
    date: '20 Oct',
    dateTime: '2026-10-20',
    title: 'Technology and Innovation',
    location: 'Mogadishu, Somalia',
  },
  {
    date: '05 Nov',
    dateTime: '2026-11-05',
    title: 'Young Leaders Summit',
    location: 'Nairobi, Kenya',
  },
]

function Events() {
  return (
    <section id="events" className="scroll-mt-20 bg-slate-100 px-6 py-16 text-slate-900 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-semibold text-blue-600">Upcoming Events</p>
          <h2 className="mt-2 text-3xl font-bold">Join Our Next Event</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {events.map((event) => (
            <article className="rounded-xl bg-white p-6 shadow-sm" key={event.title}>
              <time className="font-bold text-blue-600" dateTime={event.dateTime}>{event.date}</time>
              <h3 className="mt-3 text-xl font-bold">{event.title}</h3>
              <p className="mt-2 text-slate-600">{event.location}</p>
              <button className="mt-6 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700" type="button">
                View Event
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events
