function About() {
  return (
    <section id="about-us" className="scroll-mt-20 bg-white px-6 py-16 text-slate-900 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <p className="font-semibold text-blue-600">About Us</p>
        <h2 className="mt-2 text-3xl font-bold">Connecting great speakers with great events</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
          Speakly helps organizers discover and book speakers for conferences, workshops, and community programs.
          Speakers can join with a profile that highlights their expertise, experience, and availability. 
        </p>
        <a
          className="mt-8 inline-block rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700"
          href={`mailto:hello@speakly.com?subject=${encodeURIComponent('Speakly enquiry')}`}
        >
          Contact us
        </a>
      </div>
    </section>
  )
}

export default About
