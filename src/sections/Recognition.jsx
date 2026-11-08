import SectionHeading from '../components/SectionHeading.jsx'
import { awards, niqAwardPhoto } from '../data/experience.js'

function Recognition() {
  return (
    <section className="recognition-section page-shell" id="recognition">
      <SectionHeading number="05" label="AWARDS & RECOGNITION" />
      <img
        className="recognition-highlight"
        src={niqAwardPhoto}
        alt="Shri Krupa receiving an award at the NIQ Global Technology Awards"
        loading="lazy"
      />
      <div className="awards-grid">
        {awards.map((award, index) => (
          <article className={`award-card award-card--${(index % 3) + 1} scroll-reveal`} key={award.name}>
            <span className="award-card__mark" aria-hidden="true">✦</span>
            <p className="award-card__eyebrow">{award.year} · {award.company}</p>
            <h3>{award.name}</h3>
            <p className="award-card__organization">{award.organization}</p>
            <a
              className="award-card__certificate"
              href={award.certificate}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${award.name} certificate`}
            >
              <img src={award.certificate} alt="" loading="lazy" />
              <span>View certificate ↗</span>
            </a>
          </article>
        ))}
      </div>
      <p className="recognition-note">
        Beyond these awards, I’ve also received thoughtful recognition from colleagues,
        managers, product owners, architects, and the Head of Technology through messages,
        emails, and conversations.
      </p>
    </section>
  )
}

export default Recognition
