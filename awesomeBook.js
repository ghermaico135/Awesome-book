/** @format */

const bookList = document.querySelector(".booklist");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const addBtn = document.querySelector("#addBtn");
// let userBooks = JSON.parse(localStorage.getItem('userBooks')) || [];

// book

class Books {
	constructor(title, author) {
		this.title = title;
		this.author = author;
	}
}

// userInterface

// Eventlistners
