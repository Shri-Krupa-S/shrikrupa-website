import SectionHeading from '../components/SectionHeading.jsx'
import skillGroups from '../data/skills.js'

function About() {
  return (
    <section className="content-section page-shell scroll-reveal" id="about">
      <SectionHeading
        number="01"
        label="TECHNICAL SKILLS"
      />
      <div className="expertise-grid">
        {skillGroups.map((group) => (
          <div className="expertise-group" key={group.category}>
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
