function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <div className="footer-bottom">
          <a className="footer-brand" href="/">SHRI KRUPA <span>·</span> shrikrupa.me</a>
          <span>© {new Date().getFullYear()} SHRI KRUPA</span>
          <a href="#top" className="back-to-top">BACK TO TOP ↑</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
