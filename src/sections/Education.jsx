import SectionHeading from '../components/SectionHeading.jsx'
import { education } from '../data/experience.js'

function Education() {
  return (
    <section className="education-section page-shell" id="education">
      <SectionHeading number="03" label="EDUCATION" />
      <article className="education-card scroll-reveal">
        <div className="education-card__icon" aria-hidden="true">学</div>
        <div>
          <h3>{education.institution}</h3>
          <p>{education.degree}</p>
          <div className="education-card__details">
            <span>{education.result}</span>
            <span>{education.distinction}</span>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Education
