import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer.jsx'
import FloatingToolbar from './components/FloatingToolbar.jsx'
import Navbar from './components/Navbar.jsx'
import Articles from './pages/Articles.jsx'
import Article from './pages/Article.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Reading from './pages/Reading.jsx'

function App() {
  const [path, setPath] = useState(() => window.location.pathname.replace(/\/+$/, '') || '/')

  useEffect(() => {
    const handleClick = (event) => {
      if (
        event.defaultPrevented
        || event.button !== 0
        || event.metaKey
        || event.ctrlKey
        || event.shiftKey
        || event.altKey
      ) {
        return
      }

      const link = event.target.closest('a')
      if (!link || link.target && link.target !== '_self' || link.hasAttribute('download')) return

      const url = new URL(link.href, window.location.href)
      if (url.origin !== window.location.origin) return

      const currentPath = window.location.pathname.replace(/\/+$/, '') || '/'
      if (url.pathname === currentPath && url.search === window.location.search && url.hash) return

      event.preventDefault()
      window.history.pushState({}, '', `${url.pathname}${url.search}${url.hash}`)
      setPath(url.pathname.replace(/\/+$/, '') || '/')
    }

    const handlePopState = () => {
      setPath(window.location.pathname.replace(/\/+$/, '') || '/')
    }

    document.addEventListener('click', handleClick)
    window.addEventListener('popstate', handlePopState)

    return () => {
      document.removeEventListener('click', handleClick)
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) {
      requestAnimationFrame(() => document.getElementById(decodeURIComponent(hash))?.scrollIntoView())
    } else {
      window.scrollTo(0, 0)
    }
  }, [path])

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
  }, [path])

  let page = <Home />

  if (path === '/projects') {
    page = <Projects />
  } else if (path === '/articles') {
    page = <Articles />
  } else if (path.startsWith('/articles/')) {
    page = <Article slug={path.slice('/articles/'.length)} />
  } else if (path === '/reading') {
    page = <Reading />
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
