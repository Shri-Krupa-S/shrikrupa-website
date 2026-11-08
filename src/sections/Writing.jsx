import SectionHeading from '../components/SectionHeading.jsx'
import ArticleCard from '../components/ArticleCard.jsx'
import { articles } from '../data/articles.js'

const readingTopics = [
  'Software architecture',
  'Product engineering',
  'Design systems',
  'Distributed systems',
]

function Writing() {
  return (
    <>
      <section className="notes-section scroll-reveal" id="writing">
        <div className="page-shell notes-grid">
          <div>
            <SectionHeading
              number="05"
              label="MY WRITINGS"
            />
          </div>
          <div className="notes-copy">
            <p>Some things I learnt, some things I thought, and some things I couldn’t stop thinking about.</p>
          </div>
        </div>
        <div className="page-shell">
          <div className="article-carousel" aria-label="Featured articles">
            {articles.map((article) => (
              <ArticleCard
                article={article}
                key={article.slug}
                polaroid
              />
            ))}
          </div>
          <div className="notes-copy">
            <a
              className="notes-copy__link"
              href="/articles"
              target="_blank"
              rel="noreferrer"
            >
              Browse all articles <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="reading-section page-shell scroll-reveal" id="reading">
        <SectionHeading number="06" label="READING LIST" />
        <div className="reading-content">
          <h2>Current topics</h2>
          <ul className="reading-list">
            {readingTopics.map((topic, index) => (
              <li key={topic}><span>0{index + 1}</span>{topic}<span aria-hidden="true">↗</span></li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default Writing
