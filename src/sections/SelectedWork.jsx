import SectionHeading from '../components/SectionHeading.jsx'
import projects from '../data/projects.js'

function SelectedWork({ page = false }) {
  return (
    <section className={`work-section${page ? ' work-section--page' : ''}`} id="work">
      <div className="page-shell">
        <SectionHeading
          number="02"
          label="SELECTED PROJECTS"
          variant="section-heading--work"
        />
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-card__topline">
                <span>{project.number} / CASE STUDY</span>
                <span>{project.category}</span>
              </div>
              <div className="project-card__body">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-card__details">
                  <ul className="project-stack" aria-label={`${project.title} technologies`}>
                    {project.stack.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <ul className="project-outcomes">
                    {project.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SelectedWork
