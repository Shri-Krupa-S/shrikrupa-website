function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="/" aria-label="Shri Krupa home">
          <img className="brand__mark" src="/sk-lock-key.png" alt="" />
          <span className="brand__name">
            <span className="brand__name-shri">SHRI</span>{' '}
            <span className="brand__name-krupa">KRUPA</span>
          </span>
        </a>
        <div className="nav-links">
          <a href="/#experience">Experience</a>
          <a href="/articles">Writing</a>
          <a href="/#reading">Reading</a>
          <a className="nav-resume" href="/Shri-Krupa-Resume-2026.pdf" download="Shri-Krupa-S-Resume.pdf">Resume ↓</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
