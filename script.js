let myLibrary = [];

function Book (title,author,numberPages,isRead){
    this.id = id;
    this.title = title;
    this.author = author;
    this.numberPages = numberPages;
    this.isRead = isRead;        
}

const getBookfromForm =() =>{
       
    let book = {
        id:Date.now(),
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

const addBookToLibrary = (book)=>{
    myLibrary.push(book);
    createBookGrid(book);
    
    
}

const displayBooks = ()=>{
   console.log(myLibrary);
   
}

const saveLocalStorage =() =>{
    let myLibrary_collection = localStorage.getItem('myLibraryList');
    localStorage.setItem('myLibraryList', JSON.stringify(myLibrary));
}


const createBookGrid = (book) =>{
    const libView   = document.getElementById('library-view');
    const bookCard  = document.createElement('div');
    const deleteBtn = document.createElement('btn');
    const readBtn   = document.createElement('btn');
    const title = document.createElement('h3');
    const author = document.createElement('h3');
    const pages = document.createElement('h3');

    bookCard.classList.add('book-card');
    readBtn.classList.add('btn','read-book');
    deleteBtn.classList.add('btn','delete-book');
    
    deleteBtn.textContent = 'Delete book';
    readBtn.textContent = 'Read';
    title.textContent = `"${book.title}"`;
    author.textContent = `"${book.author}"`;
    pages.textContent = `"${book.numberPages}"`;
    

    libView.appendChild(bookCard);
    bookCard.appendChild(deleteBtn);
    bookCard.appendChild(readBtn);
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);

     
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



    document.getElementById('add-book').addEventListener('click',openAddBookForm);
    document.getElementById('close-form').addEventListener('click',closeAddBookForm);
    document.getElementById('add-form').addEventListener('click',validateForm);


  