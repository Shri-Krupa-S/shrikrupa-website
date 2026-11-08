function BookCard({ book }) {
  return (
    <article className="book-card">
      <div className={`book-card__cover book-card__cover--${book.cover}`} aria-label={`Book cover: ${book.title}`}>
        <span className="book-card__cover-title">{book.title}</span>
        <span className="book-card__cover-author">{book.author}</span>
      </div>
      <div className="book-card__details">
        <div className="book-card__heading">
          <div>
            <h3>{book.title}</h3>
            <p className="book-card__author">{book.author}</p>
          </div>
          <span className={`book-card__status book-card__status--${book.status.toLowerCase()}`}>
            {book.status}
          </span>
        </div>
        <p className="book-card__takeaway">{book.takeaway}</p>
      </div>
    </article>
  )
}

export default BookCard
