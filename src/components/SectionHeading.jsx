function SectionHeading({ number, label, title, description, variant = '' }) {
  return (
    <>
      {label && (
        <p className="section-label">
          {number && <span>{number}</span>}
          <span className="section-label__line" aria-hidden="true" />
          {label}
        </p>
      )}
      {title && (
        <div className={`section-heading ${variant}`.trim()}>
          <h2>{title}<span className="accent-period">.</span></h2>
          {description && <p>{description}</p>}
        </div>
      )}
    </>
  )
}

export default SectionHeading
