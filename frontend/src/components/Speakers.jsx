import { useMemo, useState } from 'react'

const CATEGORIES = ['Leadership', 'Technology', 'Health', 'Education', 'Finance', 'Culture']

const SPEAKERS = [
  { name: 'Amina Hassan', expert: 'Leadership', experience: '12 years', rate: '$2,500', joined: '2021' },
  { name: 'Daniel Okello', expert: 'Technology', experience: '9 years', rate: '$1,800', joined: '2022' },
  { name: 'Sofia Mendes', expert: 'Health', experience: '15 years', rate: '$3,200', joined: '2020' },
  { name: 'James Kariuki', expert: 'Finance', experience: '11 years', rate: '$2,100', joined: '2023' },
  { name: 'Layla Ibrahim', expert: 'Education', experience: '8 years', rate: '$1,400', joined: '2024' },
  { name: 'Omar Yusuf', expert: 'Culture', experience: '10 years', rate: '$1,650', joined: '2022' },
]

function Speakers() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const speakers = useMemo(() => {
    const term = query.trim().toLowerCase()
    return SPEAKERS.filter((speaker) => {
      const matchesCategory = activeCategory === 'All' || speaker.expert === activeCategory
      const matchesQuery =
        !term ||
        speaker.name.toLowerCase().includes(term) ||
        speaker.expert.toLowerCase().includes(term)
      return matchesCategory && matchesQuery
    })
  }, [query, activeCategory])

  return (
    <section id="find-speakers" className="scroll-mt-20 bg-white px-6 py-16 text-slate-900 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-semibold text-blue-600">Find Speakers</p>
          <h2 className="mt-2 text-3xl font-bold">Book a speaker for your next event</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Search by name or topic, then filter by category to shortlist speakers that match your audience.
          </p>
        </div>

        <form
          className="mx-auto mt-8 flex max-w-xl gap-2"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="sr-only" htmlFor="speaker-search">Search speakers</label>
          <input
            id="speaker-search"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500"
            placeholder="Search by name or topic, e.g. leadership"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700" type="submit">
            Search
          </button>
        </form>

        <div id="categories" className="scroll-mt-20 mt-10">
          <p className="text-sm font-semibold text-slate-500">Categories</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {['All', ...CATEGORIES].map((category) => (
              <button
                key={category}
                type="button"
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'border border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-600 hover:text-blue-600'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-8 text-sm text-slate-600">
          {speakers.length} speaker{speakers.length === 1 ? '' : 's'} available
          {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}.
          {(query || activeCategory !== 'All') && (
            <button
              className="ml-3 font-semibold text-blue-600 hover:text-blue-800"
              type="button"
              onClick={() => {
                setQuery('')
                setActiveCategory('All')
              }}
            >
              Clear filters
            </button>
          )}
        </p>

        {speakers.length === 0 ? (
          <p className="mt-8 rounded-xl border border-dashed border-slate-300 px-6 py-12 text-center text-slate-600">
            No speakers match that search. Try a different name or category.
          </p>
        ) : (
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {speakers.map((speaker) => (
              <li className="rounded-xl border border-slate-200 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg" key={speaker.name}>
                <div className="flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-full bg-blue-600 text-lg font-bold text-white">
                    {speaker.name.charAt(0)}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold">{speaker.name}</h3>
                    <p className="text-sm font-semibold text-blue-600">{speaker.expert}</p>
                  </div>
                </div>
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
                <a
                  className="mt-6 inline-block rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700"
                  href={`mailto:events@speakly.com?subject=${encodeURIComponent(`Booking request: ${speaker.name}`)}`}
                >
                  Request booking
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default Speakers
