import Hero from '../sections/Hero.jsx'
import About from '../sections/About.jsx'
import Experience from '../sections/Experience.jsx'
import Education from '../sections/Education.jsx'
import Recognition from '../sections/Recognition.jsx'
import Writing from '../sections/Writing.jsx'

function Home() {
  return (
    <main id="top">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Recognition />
      <Writing />
    </main>
  )
}

export default Home
