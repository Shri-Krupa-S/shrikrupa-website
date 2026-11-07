import Writing from '../sections/Writing.jsx'

function Articles() {
  return (
    <main className="articles-page" id="top">
      <div className="page-shell articles-page__intro">
        <p className="eyebrow">ENGINEERING NOTES</p>
        <h1>Writing &amp; reading<span className="accent-period">.</span></h1>
        <p>Topics in software engineering, architecture, and development.</p>
      </div>
      <Writing />
    </main>
  )
}

export default Articles
