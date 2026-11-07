import SectionHeading from '../components/SectionHeading.jsx'
import experience from '../data/experience.js'

function Experience() {
  return (
    <section className="experience-section page-shell" id="experience">
      <SectionHeading
        number="02"
        label="EXPERIENCE"
      />
      <div className="experience-list">
        {experience.map((role) => (
          <article className="experience-card scroll-reveal" key={`${role.company}-${role.role}`}>
            <p className="experience-card__period">{role.period}</p>
            <div className="experience-card__content">
              <div className="experience-card__heading">
                <h3>{role.role}</h3>
                <img
                  className="experience-card__logo"
                  src={role.logo}
                  alt={`${role.company} logo`}
                />
              </div>
              <p className="experience-card__company">{role.company} <span>·</span> {role.location}</p>
              <p className="experience-card__product">{role.product}</p>
              <div className="experience-card__achievements">
                {role.achievements.map((achievement) => (
                  <div className="achievement-chip" key={achievement.metric}>
                    <strong>{achievement.metric}</strong>
                    <span>{achievement.description}</span>
                  </div>
                ))}
              </div>
              <ul>
                {role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
