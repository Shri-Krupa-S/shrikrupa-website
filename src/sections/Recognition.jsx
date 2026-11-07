import SectionHeading from '../components/SectionHeading.jsx'
import { awards } from '../data/experience.js'

function Recognition() {
  return (
    <section className="recognition-section page-shell" id="recognition">
      <SectionHeading number="04" label="AWARDS & RECOGNITION" />
      <div className="awards-grid">
        {awards.map((award, index) => (
          <article className={`award-card award-card--${index + 1} scroll-reveal`} key={award.name}>
            <span className="award-card__mark" aria-hidden="true">✦</span>
            <p className="award-card__eyebrow">RECOGNITION{award.year ? ` · ${award.year}` : ''}</p>
            <h3>{award.name}</h3>
            <p className="award-card__organization">{award.organization}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Recognition
