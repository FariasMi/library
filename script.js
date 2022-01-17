let myLibrary = [];

function Book (){
    this.title = title;
    this.author = author;
    this.numberPages = numberPages;
    this.isRead = isRead;        
}


function addBookToLibrary(bookObj){
    myLibrary.push(bookObj);

}

function displayBooks(){
    console.log(myLibrary);
}

let book1 = {
    "title": "The Lord of the rings : Two towers",
    "author": "R.R.Tolkien",
    "numberPages": 352,
    "isRead": true
   };
let book2 = {
    "title": "The Lord of the rings :return of the king ",
    "author": "R.R.Tolkien",
    "numberPages": 431,
    "isRead": true
   };


book1.prototype = Object.create(Book.prototype);
book2.prototype = Object.create(Book.prototype);

addBookToLibrary(book1);
addBookToLibrary(book2);

displayBooks();

/*parte do dom */
function openAddBookForm(){
    
    document.getElementsByClassName('form-area')[0].style.display = 'block';

}

    document.getElementById('add-book').addEventListener('click',openAddBookForm);
    