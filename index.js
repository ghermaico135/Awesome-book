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
  addBook();
  showList();


})
 

window.addEventListener('load' ,() =>{
  const books = JSON.parse(localStorage.getItem('userBooks'))
  title.value = books.bookTitle
  author.value = books.bookAuthor

})


form.addEventListener('change' , (e) =>{
  e.preventDefault()


})

function addBook() {
  if(title.value === '' && author.value === ''){
    alert("Please fill up all fields");
  } else {
    userBooks.bookTitle = title.value
    userBooks.bookAuthor = author.value
    localStorage.setItem('userBooks',JSON.stringify(userBooks))
    title.value = "";
    author.value = "";
  }
  


}
function showList() {
  let div = document.createElement('div');
  div.innerHTML = `<p class="title">${books.bookTitle}</p><br>
  <p class="author">${books.bookList}</p><br>
  <button type="submit" id="removeBtn">Remove</button>
  <br>
  `;
  bookList.appendChild(div);

};
