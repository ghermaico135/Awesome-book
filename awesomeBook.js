/** @format */

const bookList = document.querySelector('.booklist');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const addBtn = document.querySelector('#addBtn');

// book
class Book {
  constructor() {
    this.userBook = [];
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
class="container bg-light d-flex justify-content-between border border-dark p-2 w-50">
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
}

const bookStore = new Book();
bookStore.getBook();
bookStore.showList();

// Add EventListner
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (title.value === '' && author.value === '') {
    alert('Please fill up all fields');
  }
  bookStore.addBooks(title.value, author.value);
  bookStore.setBook();
  bookStore.getBook();
  bookList.innerHTML = bookStore.showList();
  title.value = '';
  author.value = '';
});

// remove
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('removeBtn')) {
    bookStore.remove(e.target.id);
    bookStore.setBook();
    bookList.innerHTML = bookStore.showList();
  }
});
