import SectionHeading from '../components/SectionHeading.jsx'
import { education } from '../data/experience.js'

function Education() {
  return (
    <section className="education-section page-shell" id="education">
      <SectionHeading number="03" label="EDUCATION" />
      <article className="education-card scroll-reveal">
        <div className="education-card__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="m2 9 10-5 10 5-10 5L2 9Z" />
            <path d="M6 11v5c3.3 2.7 8.7 2.7 12 0v-5M22 9v6" />
          </svg>
        </div>
        <div>
          <h3>{education.institution}</h3>
          <p>{education.degree}</p>
          <div className="education-card__details">
            <span>{education.result}</span>
            <span>
              {education.distinction.lead}
              <strong className="education-card__highlight">{education.distinction.highlight}</strong>
              {education.distinction.trailing}
            </span>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Education
