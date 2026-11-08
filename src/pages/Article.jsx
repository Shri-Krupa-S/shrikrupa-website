import { articleCategories, articles } from '../data/articles.js'

function formatPublishedDate(date) {
  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`))
}

function Article({ slug }) {
  const article = articles.find((item) => item.slug === slug)
  const category = articleCategories.find((item) => item.id === article?.category)

  if (!article || !category) {
    return (
      <main className="article-page page-shell" id="top">
        <p className="eyebrow">ARTICLE NOT FOUND</p>
        <h1>This page is still being written.</h1>
        <a className="article-page__back" href="/articles">Back to all writing</a>
      </main>
    )
  }

  return (
    <main className="article-page page-shell" id="top">
      <a className="article-page__back" href={`/articles#category-${category.id}`}>
        ← Back to {category.label.toLowerCase()}
      </a>
      <article>
        <p className="eyebrow">{category.label}</p>
        <h1>{article.title}<span className="accent-period">.</span></h1>
        <p className="article-page__date">{formatPublishedDate(article.publishedOn)}</p>
        <div className="article-page__content">
          {article.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </article>
    </main>
  )
}

export default Article
