function BookCard({ book }) {
  return (
    <article className="book-card">
      <div className={`book-card__cover book-card__cover--${book.cover}${book.coverImage ? ' book-card__cover--image' : ''}`}>
        {book.coverImage
          ? <img src={book.coverImage} alt={`${book.title} book cover`} />
          : (
            <>
              <span className="book-card__cover-title">{book.title}</span>
              {book.author && <span className="book-card__cover-author">{book.author}</span>}
            </>
          )}
      </div>
      <div className="book-card__details">
        <div className="book-card__heading">
          <div>
            <h3>{book.title}</h3>
            {book.author && <p className="book-card__author">{book.author}</p>}
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
