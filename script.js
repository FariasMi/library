let myLibrary = [];
class Book{
    constructor (id,title,author,numberPages,isRead){
        this.id = id;
        this.title = title;
        this.author = author;
        this.numberPages = numberPages;
        this.isRead = isRead;        
    }


}

const deleteBook = (book) =>{
    myLibrary.splice(myLibrary.findIndex(obj=>obj.id===book.id),1);
    
}


const getBookfromForm =() =>{
        
    let id = Date.now(); 
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let numberPages = document.getElementById('pages').value;
    let isRead = document.getElementById('read').checked;
    let book = new Book(id,title,author,numberPages,isRead);

    let bookExists = verifyIfTheBookExists(book);
    if(!bookExists){
        addBookToLibrary(book);
        document.forms[0].reset();
        
    }
    
}

const addBookToLibrary = (book)=>{
    myLibrary.push(book);
    saveLocalStorage(book);
    displayBooks(book);
    
    
    
}

const displayBooks = (book)=>{
    createBookGrid(book);
   
}

const saveLocalStorage =()=>{
        localStorage.setItem('myLibraryList',JSON.stringify(myLibrary));

    }
 
   
const createBookGrid = (book) =>{
    const libView   = document.getElementById('library-view');
    const bookCard  = document.createElement('div');
    const title = document.createElement('h3');
    const author = document.createElement('h3');
    const pages = document.createElement('h3');
    const deleteBtn = document.createElement('btn');
    const readBtn   = document.createElement('btn');

    bookCard.classList.add('book-card');
    readBtn.classList.add('btn','read-book');
    deleteBtn.classList.add('btn','delete-book');
    
    
    title.textContent = `"${book.title}"`;
    author.textContent = book.author;
    pages.textContent = book.numberPages;
    deleteBtn.textContent = 'Remove';
    readBtn.textContent = 'Read';
    
    libView.appendChild(bookCard);
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(readBtn);
    bookCard.appendChild(deleteBtn);

    if(book.isRead){
        readBtn.style.backgroundColor = 'rgba(60, 179, 113,0.5)';
    }else{
        readBtn.style.backgroundColor = 'rgba(219,32,63,0.5)';
        readBtn.textContent = 'Not read';
    }   
    
    readBtn.addEventListener('click', ()=>{
        if(book.isRead){
            readBtn.style.backgroundColor = 'rgba(219,32,63,0.5)';
            readBtn.textContent = 'Not read';
            book.isRead = false;            
        }else{
            readBtn.style.backgroundColor = 'rgba(60, 179, 113,0.5)';
            readBtn.textContent = 'Read';
            book.isRead = true;          

        }
        saveLocalStorage();
    });

   deleteBtn.addEventListener('click',()=>{
        deleteBook(book);
        bookCard.remove();
        saveLocalStorage();

   });

}

const verifyIfTheBookExists = (book) =>{
   const found_books= myLibrary.filter(objBook => objBook.title === book.title &&  objBook.author === book.author);
        
   if(Object.keys(found_books).length !=0 ){
        alert('Hey,this book already exists!');
        return true;      
   }
       return false;

   }


const getBooksFromLocalStorage = ()=>{
    let jsonFromLocalStorage = localStorage.getItem('myLibraryList');
    if(jsonFromLocalStorage != null){
        for(i=0;i<jsonFromLocalStorage.length;i++){
            myLibrary = JSON.parse(jsonFromLocalStorage);
        }
    }
}

const displayBooksThatAlreadyExist = ()=>{
    if(myLibrary.length != null){
        myLibrary.forEach((bookInLibrary)=>{
            createBookGrid(bookInLibrary);
        });
    }   
       
}


const validateForm = (e)=>{
   const title = document.getElementById('title');
   const author = document.getElementById('author');
   const pages = document.getElementById('pages');
   let error = false;

   if(title.value == '' || title.value == null){
       error = true;
       title.style.borderBottom = ' dotted #ff0000';
       title.placeholder = 'You need to fill the title';
       
   }
   if(author.value == '' || title.value == null){
       error = true;
       author.style.borderBottom = ' dotted #ff0000';
       author.placeholder = 'You need to fill the author';
   }
   if(pages.value == '' || pages.value == null){
        error = true;
        pages.style.borderBottom = ' dotted #ff0000';
        pages.placeholder = 'You need to fill the pages';
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

const openAddBookForm = ()=>{    
    formArea.style.display = 'block';   
}
const closeAddBookForm =()=>{
    formArea.style.display = 'none';
}
    getBooksFromLocalStorage();
    displayBooksThatAlreadyExist();
    document.getElementById('add-book').addEventListener('click',openAddBookForm);
    document.getElementById('close-form').addEventListener('click',closeAddBookForm);
    document.getElementById('add-form').addEventListener('click',validateForm);


  
