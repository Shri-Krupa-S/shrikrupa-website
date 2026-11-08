function formatPublishedDate(date) {
  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`))
}

function getReadingTime(content) {
  const wordCount = content.join(' ').trim().split(/\s+/).length
  const minutes = Math.max(1, Math.ceil(wordCount / 200))
  return `${minutes} min read`
}

function ArticleCard({ article, polaroid = false }) {
  return (
    <article className={`article-card${polaroid ? ' article-card--polaroid' : ''}`}>
      {polaroid && (
        <a
          aria-label={`Read ${article.title}`}
          className="article-card__print"
          href={`/articles/${article.slug}`}
          rel="noreferrer"
          target="_blank"
        >
          <span className="article-card__print-title">{article.title}</span>
        </a>
      )}
      <p className="article-card__meta">
        <span>{formatPublishedDate(article.publishedOn)}</span>
        <span>{getReadingTime(article.content)}</span>
      </p>
      {!polaroid && (
        <h3>
          <a href={`/articles/${article.slug}`} target="_blank" rel="noreferrer">{article.title}</a>
        </h3>
      )}
      <p className="article-card__preview">{article.content[0]}</p>
      <a
        className="article-card__read-more"
        href={`/articles/${article.slug}`}
        target="_blank"
        rel="noreferrer"
      >
        Read article
      </a>
    </article>
  )
}

export default ArticleCard
