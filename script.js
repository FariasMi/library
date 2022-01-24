let myLibrary = [];

function Book (title,author,numberPages,isRead){
    this.title = title;
    this.author = author;
    this.numberPages = numberPages;
    this.isRead = isRead;        
}

const createBookfromForm =(e) =>{
     e.preventDefault();
      let book = {
        title:document.getElementById('title').value,
        author:document.getElementById('author').value,
        numberPages: document.getElementById('pages').value,
        isRead:document.getElementById('read').checked
    }
       
    book.prototype = Object.create(Book.prototype); 
    addBookToLibrary(book);
    document.forms[0].reset();
    displayBooks();

}

const addBookToLibrary = (bookObj)=>{
    myLibrary.push(bookObj);

}

const displayBooks = ()=>{
    console.log(myLibrary);
}

const saveLocalStorage =() =>{
    return;
}

const validateForm = ()=>{
   const title = document.forms['form']['title'].value;
   const author = document.forms['form']['author'].value;
   const pages = document.forms['form']['pages'].value;
   // if(title ==''){
  // /     document.getElementById('title').style.borderColor = 'red';
   // }
}

let book1 = {
    "title": "The Lord of the rings : Two towers",
    "author": "R.R.Tolkien",
    "numberPages": 352,
    "isRead": true
}
let book2 = {
    "title": "The Lord of the rings :return of the king ",
    "author": "R.R.Tolkien",
    "numberPages": 431,
    "isRead": false
   };


book1.prototype = Object.create(Book.prototype);
book2.prototype = Object.create(Book.prototype);

addBookToLibrary(book1);
addBookToLibrary(book2);


   

/*parte do dom */

let formArea = document.getElementsByClassName('form-area')[0];
let form = document.getElementById('book-form');


function openAddBookForm(){
    
    formArea.style.display = 'block';

}

function closeAddBookForm(){
    formArea.style.display = 'none';
}


    document.getElementById('add-book').addEventListener('click',openAddBookForm);
    document.getElementById('close-form').addEventListener('click',closeAddBookForm);
    document.getElementById('add-form').addEventListener('click',createBookfromForm);



   