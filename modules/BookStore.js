class BookStore {
  static getBooks() {
    let books = [];
    books = JSON.parse(window.localStorage.getItem('books'));
    if (!books) {
      books = [];
    }
    return books;
  }

  static addBook(book) {
    const books = this.getBooks();
    books.push(book);
    window.localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(index) {
    let books = this.getBooks();
    const newBooks = books.filter((book, innerIndex) => index !== innerIndex);
    books = newBooks;
    window.localStorage.setItem('books', JSON.stringify(books));
  }
}

export default BookStore;