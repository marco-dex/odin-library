const myLibrary = [
    new Book('The Old Man and the Sea', 'Earnest Hemingway', 200, false), 
    new Book("Hitchhiker's Guide to the Galaxy", "Douglas Adams", 354, true)
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.read = read;

}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    displayBooks();
}

function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;

    let newBook = new Book(title, author, pages, read)

    myLibrary.push(newBook)

    displayBooks();

}


let newBookBtn = document.querySelector("#new-book-btn"); 

newBookBtn.addEventListener('click', function(){
    let newBookForm = document.querySelector('#new-book-form');
    newBookForm.style.display = "block";
})

let addBookBtn = document.querySelector('#add-book-btn'); 

addBookBtn.addEventListener('click', function(e) {
    e.preventDefault();
    addBookToLibrary();
})


function displayBooks() {
    let library = document.querySelector('#library');
    library.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i]
        let bookElement = document.createElement("div"); 
        bookElement.innerHTML = `
         <div class="card-header">
            <h3>${book.title}</h3>
            <h5>${book.author}</h5>
         </div>
         <div class="card-body">
            <p> ${book.pages} pages </p>
            <p> ${book.read ? "yes" : "no"} </p>
         </div>
         <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
         <button class="toggle-btn" onclick="toggleRead(${i})">Toggle Read</button>
        `; 
        library.appendChild(bookElement); 
    }
}


function removeBook(index) {
    myLibrary.splice(index, 1); 
    displayBooks();
}