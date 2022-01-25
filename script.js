let myLibrary = [];

function Book (title,author,numberPages,isRead){
    this.title = title;
    this.author = author;
    this.numberPages = numberPages;
    this.isRead = isRead;        
}

const getBookfromForm =() =>{
       
    let book = {
        title:document.getElementById('title').value,
        author:document.getElementById('author').value,
        numberPages: document.getElementById('pages').value,
        isRead:document.getElementById('read').checked
    }
       
    book.prototype = Object.create(Book.prototype); 
    addBookToLibrary(book);
    saveLocalStorage();
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
    localStorage.setItem('myLibraryList', JSON.stringify(myLibrary));
}

const validateForm = (e)=>{
   const title = document.getElementById('title');
   const author = document.getElementById('author');
   const pages = document.getElementById('pages');
   let error = false;

   if(title.value == '' || title.value == null){
       error = true;
       title.style.borderBottom = ' dotted #ff0000';
       title.placeholder = "you must to fill the title"
   }
   if(author.value == '' || title.value == null){
       error = true;
       author.style.borderBottom = ' dotted #ff0000';
       author.placeholder = "you must to fill the author"
   }
   if(pages.value == '' || pages.value == null){
        error = true;
        pages.style.borderBottom = ' dotted #ff0000';
        pages.placeholder = "you must to fill the pages"
   }

    if(!error){
        e.preventDefault();
        getBookfromForm();
        title.style.borderBottom  = ' dotted #000000';
        author.style.borderBottom = ' dotted #000000';
        pages.style.borderBottom  = ' dotted #000000';
        title.placeholder = "Title"
        author.placeholder = "Author"
        pages.placeholder = "Pages"
    }
   
}


let formArea = document.getElementsByClassName('form-area')[0];
let form = document.getElementById('book-form');

function openAddBookForm(){      
    formArea.style.display = 'block';   
}
function closeAddBookForm(){
    formArea.style.display = 'none';
}


const createGrid = () =>{
    let myLibraryView = document.getElementById('library-view');

    for (let i = 0; i<myLibrary.length;i++){
        const bookCard = document.createElement('div');
        bookCard.setAttribute('class','book-card');
        bookCard.setAttribute('data-id',i);
        


    }
}

    document.getElementById('add-book').addEventListener('click',openAddBookForm);
    document.getElementById('close-form').addEventListener('click',closeAddBookForm);
    document.getElementById('add-form').addEventListener('click',validateForm);


