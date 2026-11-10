import SectionHeading from '../components/SectionHeading.jsx'

function OtherInterests() {
  return (
    <section className="other-interests page-shell scroll-reveal" id="other-interests">
      <SectionHeading number="08" label="OTHER INTERESTS" />
      <p className="other-interests__intro">
        A few interests and experiences beyond my work in software.
      </p>
      <a
        className="other-interests__link"
        href="/interests"
        target="_blank"
        rel="noreferrer"
      >
        Explore my other interests <span aria-hidden="true">↗</span>
      </a>
    </section>
  )
}

export default OtherInterests
