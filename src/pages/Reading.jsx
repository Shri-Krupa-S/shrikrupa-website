import { useState } from 'react'
import BookShelf from '../components/BookShelf.jsx'
import books from '../data/books.js'

function Reading() {
  const [query, setQuery] = useState('')
  const normalizedQuery = query.trim().toLocaleLowerCase()
  const filteredBooks = normalizedQuery
    ? books.filter((book) => (
      book.title.toLocaleLowerCase().includes(normalizedQuery)
      || book.author.toLocaleLowerCase().includes(normalizedQuery)
    ))
    : books

  return (
    <main className="reading-page page-shell" id="top">
      <header className="reading-page__intro">
        <h1>My Reading List<span className="accent-period">.</span></h1>
        <p>Exploring worlds, one page at a time.</p>
      </header>
      <div className="reading-search">
        <label className="reading-search__field">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="10.8" cy="10.8" r="6.8" />
            <path d="m16 16 4.2 4.2" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by book or author..."
            aria-label="Search books by title or author"
          />
          {query && (
            <button
              className="reading-search__clear"
              onClick={() => setQuery('')}
              type="button"
              aria-label="Clear search"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>
          )}
        </label>
        <p className="reading-search__count" aria-live="polite">
          {normalizedQuery
            ? `${filteredBooks.length} ${filteredBooks.length === 1 ? 'book' : 'books'} found`
            : `${books.length} books`}
        </p>
      </div>
      {filteredBooks.length > 0
        ? <BookShelf books={filteredBooks} />
        : <p className="reading-page__empty">No books found. Try another title or author.</p>}
    </main>
  )
}

export default Reading
