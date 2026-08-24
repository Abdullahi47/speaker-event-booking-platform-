import Button from './Button'

function SpeakerCard({ speaker }) {
  return (
    <li className="flex h-full flex-col rounded-xl border border-slate-200 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start gap-4">
        <span className="grid size-14 shrink-0 place-items-center rounded-full bg-blue-600 text-lg font-bold text-white">
          {speaker.name.charAt(0)}
        </span>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display text-xl font-bold tracking-tight">{speaker.name}</h3>
            <span
              className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                speaker.available ? 'bg-lime-100 text-lime-800' : 'bg-slate-100 text-slate-600'
              }`}
            >
              {speaker.available ? 'Available' : 'Booked'}
            </span>
          </div>
          <p className="text-sm font-semibold text-blue-600">{speaker.expert}</p>
          <p className="mt-1 text-sm text-slate-500">{speaker.location}</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-600">{speaker.bio}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {speaker.topics.map((topic) => (
          <li key={topic} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            {topic}
          </li>
        ))}
      </ul>

      <dl className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-600">
        <div>
          <dt className="font-semibold text-slate-500">Experience</dt>
          <dd>{speaker.experience}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-500">Rate</dt>
          <dd>{speaker.rate}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-500">Joined</dt>
          <dd>{speaker.joined}</dd>
        </div>
      </dl>

      <div className="mt-auto pt-6">
        {speaker.available ? (
          <Button
            as="a"
            className="w-full"
            href={`mailto:events@speakly.com?subject=${encodeURIComponent(`Booking request: ${speaker.name}`)}`}
          >
            Request booking
          </Button>
        ) : (
          <Button
            as="a"
            variant="ghost"
            className="w-full"
            href={`mailto:events@speakly.com?subject=${encodeURIComponent(`Waitlist: ${speaker.name}`)}`}
          >
            Join waitlist
          </Button>
        )}
      </div>
    </li>
  )
}

export default SpeakerCard
