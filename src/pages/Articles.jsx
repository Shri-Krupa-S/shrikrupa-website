import { useState } from 'react'
import ArticleCard from '../components/ArticleCard.jsx'
import { articleCategories, articles } from '../data/articles.js'

function Articles() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(articleCategories[0].id)
  const selectedCategory = articleCategories.find((category) => category.id === selectedCategoryId)
  const categoryArticles = articles.filter((article) => article.category === selectedCategoryId)

  return (
    <main className="articles-page" id="top">
      <header className="page-shell articles-page__intro">
        <h1>Mindspace<span className="accent-period">.</span></h1>
        <p className="articles-page__lead">
          Consider this a commit to my knowledge repository.
        </p>
      </header>

      <section className="article-browser page-shell" aria-label="Browse articles by category">
        <nav className="article-browser__nav" aria-label="Article categories">
          <p className="article-browser__nav-label">CATEGORIES</p>
          {articleCategories.map((category) => (
            <button
              aria-current={selectedCategoryId === category.id ? 'page' : undefined}
              className={`article-browser__category${selectedCategoryId === category.id ? ' is-active' : ''}`}
              key={category.id}
              onClick={() => setSelectedCategoryId(category.id)}
              type="button"
            >
              <span>{category.number}</span>
              {category.label}
            </button>
          ))}
        </nav>

        <div className="article-browser__content" aria-live="polite">
          <div className="article-category__heading">
            <p className="article-browser__eyebrow">{selectedCategory.number} / {selectedCategory.label}</p>
            <h2>{selectedCategory.title}</h2>
            <p>{selectedCategory.description}</p>
          </div>
          {categoryArticles.length > 0 ? (
            <div className="article-browser__grid">
              {categoryArticles.map((article) => (
                <ArticleCard article={article} key={article.slug} polaroid />
              ))}
            </div>
          ) : (
            <p className="article-browser__empty">New writing for this category is on the way.</p>
          )}
        </div>
      </section>
    </main>
  )
}

export default Articles
