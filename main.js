const myLibrary = [
    {
        title: 'The Old Man and the Sea', 
        author: 'Earnest Hemingway' }, 
    {
        title: "Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams"
    }
]

function Book(title, author) {
    this.title = title;
    this.author = author;

}

function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;

    let newBook = new Book(title, author)

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
            <p> 200 pages </p>
         </div>
        `; 
        library.appendChild(bookElement); 
    }
}