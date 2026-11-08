import BookCard from './BookCard.jsx'

function BookShelf({ books, compact = false }) {
  return (
    <div className={`book-shelf${compact ? ' book-shelf--compact' : ''}`}>
      {books.map((book) => <BookCard book={book} key={book.id} />)}
    </div>
  )
}

export default BookShelf
