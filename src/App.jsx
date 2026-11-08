import { useEffect } from 'react'
import './App.css'
import Footer from './components/Footer.jsx'
import FloatingToolbar from './components/FloatingToolbar.jsx'
import Navbar from './components/Navbar.jsx'
import Articles from './pages/Articles.jsx'
import Article from './pages/Article.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'

  useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-reveal')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    let observer
    const startObservingOnScroll = () => {
      observer = new IntersectionObserver(
        (entries, currentObserver) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              currentObserver.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.14, rootMargin: '0px 0px -35px 0px' },
      )

      revealElements.forEach((element) => observer.observe(element))
    }

    window.addEventListener('scroll', startObservingOnScroll, {
      once: true,
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', startObservingOnScroll)
      observer?.disconnect()
    }
  }, [])

  let page = <Home />

  if (path === '/projects') {
    page = <Projects />
  } else if (path === '/articles') {
    page = <Articles />
  } else if (path.startsWith('/articles/')) {
    page = <Article slug={path.slice('/articles/'.length)} />
  }

  return (
    <>
      <Navbar />
      {page}
      <Footer />
      <FloatingToolbar />
    </>
  )
}

export default App
