
const form = document.querySelector('#form')
const title = document.querySelector('#title')
const author = document.querySelector('#author')
const button = document.querySelector('#button')
const bookList = document.querySelector('.booklist')


// setting value to browser localstorage

form.addEventListener('submit' , (e) =>{
  e.preventDefault()
  addBook();
})


window.addEventListener('load' ,() =>{
 showList();

})


form.addEventListener('change' , (e) =>{
  e.preventDefault()


})

function addBook() {
  if(title.value === '' && author.value === ''){
    alert("Please fill up all fields");
  } else {
    let  userBooks = JSON.parse(localStorage.getItem('userBooks')) || [];
    let id = Math.floor(Math.random()*10000);
    userBooks.push({
      id : id,
      title : title.value,
      author : author.value
    })
    
    localStorage.setItem('userBooks',JSON.stringify(userBooks))
    title.value = "";
    author.value = "";
    showList();
  }

}

function showList() {
  
  let  userBooks = JSON.parse(localStorage.getItem('userBooks')) || [];
  let div = document.createElement('div');
  for(let i = 0; i < userBooks.length; i++){
    
    div.innerHTML = `<p class="title">${userBooks[i].title}</p><br>
    <p class="author">${userBooks[i].author}</p><br>
    <button type="submit" class="deletebtn" id=${userBooks[i].id}>Remove</button>
    <br>
    `;
  }
  showList();
  bookList.appendChild(div);

};
function removeBook(id) {
  let userBooks = JSON.parse(localStorage.getItem('userBooks'));
  userBooks = userBooks.filter(e =>e.id != id)
  localStorage.setItem('userBooks', JSON.stringify(userBooks))
  showList();
}

bookList.addEventListener('click', (e) => {

  if(e.target.classList.contains("deletebtn")){
    let id = e.target.id;
    removeBook(id);
    
  }
})
showList();