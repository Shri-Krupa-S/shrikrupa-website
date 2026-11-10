import Hero from '../sections/Hero.jsx'
import About from '../sections/About.jsx'
import Experience from '../sections/Experience.jsx'
import Education from '../sections/Education.jsx'
import Learning from '../sections/Learning.jsx'
import Recognition from '../sections/Recognition.jsx'
import Writing from '../sections/Writing.jsx'
import OtherInterests from '../sections/OtherInterests.jsx'

function Home() {
  return (
    <main id="top">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Learning />
      <Recognition />
      <Writing />
      <OtherInterests />
    </main>
  )
}

export default Home
