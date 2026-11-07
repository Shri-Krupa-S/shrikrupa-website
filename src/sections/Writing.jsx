import SectionHeading from '../components/SectionHeading.jsx'

const readingTopics = [
  'Software architecture',
  'Product engineering',
  'Design systems',
  'Distributed systems',
]

function Writing() {
  return (
    <>
      <section className="notes-section scroll-reveal" id="writing">
        <div className="page-shell notes-grid">
          <div>
            <SectionHeading
              number="05"
              label="WRITING"
            />
          </div>
          <div className="notes-copy">
            <p>
              Notes on software engineering, architecture, and lessons from
              building production systems.
            </p>
          </div>
        </div>
      </section>

      <section className="reading-section page-shell scroll-reveal" id="reading">
        <SectionHeading number="06" label="READING LIST" />
        <div className="reading-content">
          <h2>Current topics</h2>
          <ul className="reading-list">
            {readingTopics.map((topic, index) => (
              <li key={topic}><span>0{index + 1}</span>{topic}<span aria-hidden="true">↗</span></li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default Writing
