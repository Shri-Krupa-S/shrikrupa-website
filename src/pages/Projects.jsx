import SelectedWork from '../sections/SelectedWork.jsx'

function Projects() {
  return (
    <main className="projects-page" id="top">
      <div className="page-shell projects-page__intro">
        <p className="eyebrow">PROJECT EXPERIENCE</p>
        <h1>Projects<span className="accent-period">.</span></h1>
        <p>Selected product and platform work from my experience at NIQ and TCS.</p>
      </div>
      <SelectedWork page />
    </main>
  )
}

export default Projects
