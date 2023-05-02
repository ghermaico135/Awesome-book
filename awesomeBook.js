/** @format */

const bookList = document.querySelector(".booklist");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const addBtn = document.querySelector("#addBtn");

// book
class Book {
	constructor() {
		this.userBook = [];
	}

	getBook() {
		if (localStorage.getItem("userBook") === null) {
			this.userBook = [];
		} else {
			this.userBook = JSON.parse(localStorage.getItem("userBook"));
		}

		return this.userBook;
	}

	setBook() {
		localStorage.setItem("userBook", JSON.stringify(this.userBook));
	}

	addBooks(title, author) {
		this.userBook.push({
			id: Math.floor(Math.random() * 1000),
			title,
			author,
		});
	}

	showList() {
		let content = "";
		this.userBook.forEach((book) => {
			content += `
    <div>
          <p class="title">${book.bookTitle}</p>
          <p class="author">${book.bookAuthor}</p><br>
          <button type="submit" class="removeBtn" id="${book.id}">Remove</button>
          <br>
    </div>
    `;
		});

		bookList.innerHTML = content;
	}

	remove(id) {
		this.userBook = this.userBook.filter((book) => book.id.toString() !== id);
	}

	static clear(title, author) {
		title.value = "";
		author.value = "";
	}
}

const bookStore = new Book();
bookStore.getBook();
bookStore.showList();

// remove
document.addEventListener("click", (e) => {
	if (e.target.classList.contains("removeBtn")) {
		bookStore.remove(e.target.id);
		bookStore.setBook();
		bookStore.showList();
	}
});

//Add EventListner
addBtn.addEventListener("click", (e) => {
	e.preventDefault();
	console.log("pages");

	// if(title.value === '' )
	bookStore.addBooks(title.value, author.value);
	bookStore.showList();
	// bookStore.clear(title.value, author.value);
});
