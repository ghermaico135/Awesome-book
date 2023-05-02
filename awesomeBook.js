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
      title: title,
      author: author,
    });
  }

  showList() {
    let content = '';
    this.userBook.forEach((book) => {
      content += `
    <div>
          <p class="title">${book.title}</p>
          <p class="author">${book.author}</p><br>
          <button type="submit" class="removeBtn" id="${book.id}">Remove</button>
          <br>
    </div>
    `;
    });

    return content;
  }

  remove(id) {
    this.userBook = this.userBook.filter((book) => book.id.toString() !== id);
  }

  static clear(title, author) {
    title.value = '';
    author.value = '';
  }
}

const bookStore = new Book();
bookStore.getBook();
bookStore.showList();

//Add EventListner
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  bookStore.addBooks(title.value, author.value);
  bookStore.setBook();
  bookStore.getBook();
  console.log(bookStore.showList());
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
