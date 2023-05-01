const bookList = document.querySelector('.booklist')
const form = document.querySelector('#form')
const title = document.querySelector('#title')
const author = document.querySelector('#author')
const  userBooks = [{
  bookTitle:"" ,bookAuthor:""
}]



// setting value to browser localstorage

form.addEventListener('submit' , (e) =>{
  e.preventDefault()
  userBooks.bookTitle = title.value
  userBooks.bookAuthor = author.value
  localStorage.setItem('userBooks',JSON.stringify(userBooks))

})
 

window.addEventListener('load' ,() =>{
  const books = JSON.parse(localStorage.getItem('userBooks'))
  title.value = userBooks.bookTitle
  author.value = userBooks.bookAuthor

})


form.addEventListener('change' , (e) =>{
  e.preventDefault()
  userBooks.bookTitle = title.value
  userBooks.bookAuthor = author.value
  localStorage.setItem('userBooks',JSON.stringify(userBooks))

})