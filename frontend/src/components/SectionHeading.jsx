function SectionHeading({ eyebrow, title, copy, align = 'center', titleAs: Title = 'h2' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : undefined}>
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <Title className="section-title">{title}</Title>
      {copy && <p className={`section-copy ${align === 'center' ? 'mx-auto' : ''}`}>{copy}</p>}
    </div>
  )
}

export default SectionHeading
