import profilePhoto from '../assets/shri-krupa-profile.jpeg'

function Hero() {
  return (
    <section className="hero page-shell" id="home" aria-labelledby="hero-title">
      <div className="hero-photo">
        <img src={profilePhoto} alt="Shri Krupa S" />
      </div>

      <div className="hero__content">
        <div className="hero__copy">
          <h1 id="hero-title">Shri Krupa S</h1>
          <p className="hero__headline">Full-Stack Engineer</p>
          <p className="hero__description">
            Chennai, India · shri.sk.krupa@gmail.com · +91 90478 75828
          </p>
        </div>
      </div>

      <div className="hero__summary">
        <p className="hero__summary-lead">
          I build and stabilize SaaS products where data, performance, and
          reliability matter.
        </p>
        <p className="hero__summary-detail">
          Over 5 years in retail analytics, spanning frontend architecture,
          backend systems, production reliability, and technical leadership.
        </p>
        <a className="resume-link" href="/Shri-Krupa-Resume-2026.pdf" download="Shri-Krupa-S-Resume.pdf">Download resume <span aria-hidden="true">↓</span></a>
      </div>
    </section>
  )
}

export default Hero
