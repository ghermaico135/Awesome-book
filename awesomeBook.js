/** @format */

const bookList = document.querySelector('.booklist');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const addBtn = document.querySelector('#addBtn');
const showBookList = document.querySelector('#showBookList');
const addBookList = document.querySelector('#addNewBook');
const contact = document.querySelector('#contact');
const showBook = document.querySelector('#showBook');
const addBooks = document.querySelector('#addBook');
const showContact = document.querySelector('#showContact');
const currentDate = document.querySelector('#current-date');
const homePage = document.querySelector('#home-display');

// book
class Book {
  constructor() {
    this.userBook = [];
    this.date = new Date();
  }

  // Get data from localstorage
  getBook() {
    this.userBook = JSON.parse(localStorage.getItem('userBook')) || [];
  }

  // set data to localstorage
  setBook() {
    localStorage.setItem('userBook', JSON.stringify(this.userBook));
  }

  addBooks(title, author) {
    this.userBook.push({
      id: Math.floor(Math.random() * 1000),
      title,
      author,
    });
  }

  showList() {
    let content = '';
    this.userBook.forEach((book) => {
      content += `
            <div
            class="container bg-light d-flex justify-content-between border border-dark p-2">
            <div>
            <p class="text-dark">"${book.title}" by ${book.author}</p>
            </div>
            <div>
            <button type="submit" class="btn btn-danger removeBtn" id="${book.id}">
            Remove
            </button>
            </div>
            </div>
    `;
    });

    return content;
  }

  remove(id) {
    this.userBook = this.userBook.filter((book) => book.id.toString() !== id);
  }

  // show data
  showDate() {
    const d = new Intl.DateTimeFormat('en-us', {
      dateStyle: 'full',
      timeStyle: 'short',
    });
    let content = '';
    content = `
    <div id="current-date" class="p-2 float-end">
    <h3 class="text-dark">${d.format(this.date)}</h3>
    </div>
    `;
    return content;
  }
}

const bookStore = new Book();
bookStore.getBook();
bookStore.showList();

// Add EventListner
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (title.value === '' && author.value === '') {
    // alert('Please fill up all fields');
  }
  bookStore.addBooks(title.value, author.value);
  bookStore.setBook();
  bookStore.getBook();
  bookList.innerHTML = bookStore.showList();
  title.value = '';
  author.value = '';
});

// getting items to UI at loading
window.addEventListener('load', () => {
  bookList.innerHTML = bookStore.showList();
});

// remove
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('removeBtn')) {
    bookStore.remove(e.target.id);
    bookStore.setBook();
    bookList.innerHTML = bookStore.showList();
  }
});

showBookList.addEventListener('click', () => {
  showBook.style.visibility = 'visible';
  addBooks.style.visibility = 'hidden';
  showContact.style.visibility = 'hidden';
  homePage.style.visibility = 'hidden';
});

addBookList.addEventListener('click', () => {
  showBook.style.visibility = 'hidden';
  addBooks.style.visibility = 'visible';
  showContact.style.visibility = 'hidden';
  homePage.style.visibility = 'hidden';
});

contact.addEventListener('click', () => {
  showBook.style.visibility = 'hidden';
  addBooks.style.visibility = 'hidden';
  showContact.style.visibility = 'visible';
  homePage.style.visibility = 'hidden';
});

window.addEventListener('load', () => {
  currentDate.innerHTML = bookStore.showDate();
});
