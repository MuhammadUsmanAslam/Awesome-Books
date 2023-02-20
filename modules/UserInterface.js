import BookStore from './BookStore.js';

class UserInterface {
  static displayBooks() {
    const books = BookStore.getBooks();
    const booksContainer = document.getElementById('books-container');
    booksContainer.innerHTML = '';
    books.forEach((book, index) => {
      const bookItem = document.createElement('li');
      bookItem.innerHTML = `<p>"${book.title}" by ${book.author}</p>
      <button>Remove</button>`;
      booksContainer.appendChild(bookItem);
      booksContainer.childNodes[index].childNodes[2].onclick = () => {
        BookStore.removeBook(index);
        this.displayBooks();
      };
    });
  }
}

export default UserInterface;