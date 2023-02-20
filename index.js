import Book from './modules/Book.js';
import BookStore from './modules/BookStore.js';
import UserInterface from './modules/UserInterface.js';
import { DateTime } from './modules/luxon.js';

UserInterface.displayBooks();

const displayDate = () => {
  const date = document.getElementById('date');
  date.innerHTML = DateTime.now();
};

displayDate();

// Add New Book Starts Here
const title = document.getElementById('title');
const author = document.getElementById('author');
const addNewBook = document.getElementById('add-new-book');

addNewBook.addEventListener('click', (e) => {
  const book = new Book(title.value, author.value, 1);
  e.preventDefault();
  BookStore.addBook(book);
  title.value = '';
  author.value = '';
  UserInterface.displayBooks();
});
// Add New Book Ends Here

// NavBar Starts Here
const mainSections = document.getElementById('main').children;
const navItems = [document.getElementById('nav-item-list'), document.getElementById('nav-item-add-new'), document.getElementById('nav-item-contact')];

navItems.forEach((navItem) => {
  navItem.addEventListener('click', (e) => {
    for (let i = 0; i < navItems.length; i += 1) {
      if (navItems[i] === e.target) {
        if (!navItems[i].classList.contains('font-weight-bold')) {
          navItems[i].classList.add('font-weight-bold');
        }
        mainSections[i].classList.add('display-flex');
        mainSections[i].classList.remove('display-none');
        displayDate();
      } else {
        if (navItems[i].classList.contains('font-weight-bold')) {
          navItems[i].classList.remove('font-weight-bold');
        }
        mainSections[i].classList.remove('display-flex');
        mainSections[i].classList.add('display-none');
      }
    }
  });
});
// NavBar Ends Here
