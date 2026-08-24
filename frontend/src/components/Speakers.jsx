import { useEffect, useMemo, useState } from 'react'
import Button from './Button'
import SectionHeading from './SectionHeading'
import SpeakerCard from './SpeakerCard'

const CATEGORIES = ['Leadership', 'Technology', 'Health', 'Education', 'Finance', 'Culture']

const SPEAKERS = [
  {
    name: 'Amina Hassan',
    expert: 'Leadership',
    experience: '12 years',
    rate: '$2,500',
    joined: '2021',
    location: 'Mogadishu',
    available: true,
    topics: ['Team culture', 'Women in leadership'],
    bio: 'Helps growing companies build leadership habits that last beyond a single keynote.',
  },
  {
    name: 'Daniel Okello',
    expert: 'Technology',
    experience: '9 years',
    rate: '$1,800',
    joined: '2022',
    location: 'Nairobi',
    available: true,
    topics: ['Product strategy', 'AI for business'],
    bio: 'Breaks down practical technology choices for founders and public-sector teams.',
  },
  {
    name: 'Sofia Mendes',
    expert: 'Health',
    experience: '15 years',
    rate: '$3,200',
    joined: '2020',
    location: 'Lisbon',
    available: false,
    topics: ['Public health', 'Wellbeing at work'],
    bio: 'Clinician and educator focused on health systems, prevention, and community care.',
  },
  {
    name: 'James Kariuki',
    expert: 'Finance',
    experience: '11 years',
    rate: '$2,100',
    joined: '2023',
    location: 'Nairobi',
    available: true,
    topics: ['Startup finance', 'Investment readiness'],
    bio: 'Works with operators who need clearer numbers before they scale or raise.',
  },
  {
    name: 'Layla Ibrahim',
    expert: 'Education',
    experience: '8 years',
    rate: '$1,400',
    joined: '2024',
    location: 'Hargeisa',
    available: true,
    topics: ['Learning design', 'Youth programs'],
    bio: 'Designs learning experiences for schools, NGOs, and community education programs.',
  },
  {
    name: 'Omar Yusuf',
    expert: 'Culture',
    experience: '10 years',
    rate: '$1,650',
    joined: '2022',
    location: 'Mogadishu',
    available: true,
    topics: ['Storytelling', 'Creative cities'],
    bio: 'Connects culture, media, and city-making for festivals and civic events.',
  },
]

function Speakers() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [isSearching, setIsSearching] = useState(true)

  useEffect(() => {
    setIsSearching(true)
    const timer = window.setTimeout(() => {
      setDebouncedQuery(query)
      setIsSearching(false)
    }, 320)

    return () => window.clearTimeout(timer)
  }, [query, activeCategory])

  const speakers = useMemo(() => {
    const term = debouncedQuery.trim().toLowerCase()
    return SPEAKERS.filter((speaker) => {
      const matchesCategory = activeCategory === 'All' || speaker.expert === activeCategory
      const matchesQuery =
        !term ||
        speaker.name.toLowerCase().includes(term) ||
        speaker.expert.toLowerCase().includes(term) ||
        speaker.topics.some((topic) => topic.toLowerCase().includes(term))
      return matchesCategory && matchesQuery
    })
  }, [debouncedQuery, activeCategory])

  return (
    <section id="find-speakers" className="section bg-white text-slate-900" aria-busy={isSearching}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Find Speakers"
          title="Book a speaker for your next event"
          copy="Search by name or topic, then filter by category to shortlist speakers that match your audience."
        />

        <form
          className="mx-auto mt-8 flex max-w-xl flex-col gap-2 sm:flex-row"
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
          <Button className="rounded-xl" type="submit">
            Search
          </Button>
        </form>

        <div id="categories" className="scroll-mt-20 mt-10">
          <p id="category-label" className="text-sm font-semibold text-slate-500">Categories</p>
          <div className="mt-3 flex flex-wrap gap-3" role="group" aria-labelledby="category-label">
            {['All', ...CATEGORIES].map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
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

        <p className="mt-8 text-sm text-slate-600" aria-live="polite">
          {isSearching
            ? 'Searching speakers...'
            : `${speakers.length} speaker${speakers.length === 1 ? '' : 's'} available${activeCategory !== 'All' ? ` in ${activeCategory}` : ''}.`}
          {(query || activeCategory !== 'All') && !isSearching && (
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

        {isSearching ? (
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-hidden="true">
            {Array.from({ length: 6 }).map((_, index) => (
              <li className="animate-pulse rounded-xl border border-slate-200 p-6" key={index}>
                <div className="flex items-start gap-4">
                  <span className="size-14 rounded-full bg-slate-200" />
                  <div className="flex-1 space-y-2">
                    <div className="h-5 w-32 rounded bg-slate-200" />
                    <div className="h-4 w-20 rounded bg-slate-100" />
                  </div>
                </div>
                <div className="mt-4 h-12 rounded bg-slate-100" />
                <div className="mt-6 h-10 rounded-lg bg-slate-200" />
              </li>
            ))}
          </ul>
        ) : speakers.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
            <h3 className="font-display text-xl font-bold text-slate-900">No speakers match those filters</h3>
            <p className="mx-auto mt-2 max-w-md text-slate-600">
              Try a different name, topic, or category. You can also clear the filters to see the full speaker list again.
            </p>
            <Button
              className="mt-6"
              type="button"
              onClick={() => {
                setQuery('')
                setActiveCategory('All')
              }}
            >
              Clear filters
            </Button>
          </div>
        ) : (
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {speakers.map((speaker) => (
              <SpeakerCard key={speaker.name} speaker={speaker} />
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default Speakers
