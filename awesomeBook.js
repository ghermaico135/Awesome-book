/** @format */

const bookList = document.querySelector(".booklist");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const addBtn = document.querySelector("#addBtn");

// book

class Books {
	constructor(title, author) {
		this.title = title;
		this.author = author;
	}
}
class BookList {
	contructor() {
		this.books = [];
	}
}


// userInterface

// Eventlistners
