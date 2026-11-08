import BookShelf from '../components/BookShelf.jsx'
import books from '../data/books.js'

function Reading() {
  return (
    <main className="reading-page page-shell" id="top">
      <header className="reading-page__intro">
        <h1>My Reading List<span className="accent-period">.</span></h1>
        <p>Exploring worlds, one page at a time.</p>
      </header>
      <BookShelf books={books} />
    </main>
  )
}

export default Reading
