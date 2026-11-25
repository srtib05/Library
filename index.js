const firstBook = {
  id: "dfsfd", 
  author: "Edgar Allen Poe", 
  title: "what is death", 
  pages: 506,
  read: 34
}

const secondBook = {
  id: "dgarg", 
  author: "Stephen King", 
  title: "the shining", 
  pages: 355,
  read: 23
}

//this is the blueprint for the book instances
function Book(author, title, pages, read) {
  // the constructor...
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  this.id = crypto.randomUUID();
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  return book;
}

//passes specific book arguments to book creater
function newBook() {
  const button = document.querySelector(".newBook");
  button.addEventListener("click", (event) => {
    console.log("button clicked");
  })
}

newBook();

function bookDisplay() {
  const details = myLibrary.map(book => ({
    id: book.id,
    author: book.author,
    title: book.author,
    pages: book.pages,
    read: book.read
  })
)
  makeTable(details);
  console.log(details);
}

function makeTable(details) {
   details.forEach(detail => {
    // Create a new row at the end of the tbody
    const row = tableBody.insertRow();

    // Create cells and assign object values
    row.insertCell().textContent = detail.id;
    row.insertCell().textContent = detail.author;
    row.insertCell().textContent = detail.title;
    row.insertCell().textContent = detail.pages;
    row.insertCell().textContent = detail.read;
   });
}

const myLibrary = [firstBook, secondBook];//this stores the books

bookDisplay()