import OtherInterestsList from '../components/OtherInterestsList.jsx'

function Interests() {
  return (
    <main className="interests-page page-shell" id="top">
      <header className="interests-page__intro">
        <h1>Other Interests<span className="accent-period">.</span></h1>
        <p>A few interests and experiences beyond my work in software.</p>
      </header>
      <OtherInterestsList />
    </main>
  )
}

export default Interests
