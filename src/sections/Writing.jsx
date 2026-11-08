import SectionHeading from '../components/SectionHeading.jsx'
import ArticleCard from '../components/ArticleCard.jsx'
import { articles } from '../data/articles.js'
import BookShelf from '../components/BookShelf.jsx'
import books from '../data/books.js'

function Writing() {
  return (
    <>
      <section className="notes-section scroll-reveal" id="writing">
        <div className="page-shell notes-grid">
          <div>
            <SectionHeading
              number="06"
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
        <SectionHeading number="07" label="MY READING LIST" />
        <div className="reading-content">
          <p className="reading-content__intro">A collection of minds I’ve had the pleasure of meeting.</p>
          <BookShelf books={books} compact />
          <a className="reading-content__link" href="/reading" target="_blank" rel="noreferrer">
            Explore my reading list <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </>
  )
}

export default Writing
