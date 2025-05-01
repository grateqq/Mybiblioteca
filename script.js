console.log("hola")

let  myLibrary =[]

function Book (title, author, pages, year, read) {
  this.title= title,
  this.author= author,
  this.pages= pages,
  this.year= year,
  this.read= read,
  this.status = function() {return this.read ?"already read" : "not read yet";}
}

function createBook(title, author, pages, year, read) {
  return new Book(title, author, pages, year, read);
}

function addBook (libro)  {
    myLibrary.push(libro)
}

function action (title, author, pages, year, read) {
  const libro = createBook (title, author, pages, year, read);
  addBook(libro);
}
//--- START TEST
action ("Harry Potter", "J. J. Rowling", 100, 1997, true)
action("Cien años de soledad", "Gabriel García Márquez", 432, 1967, false);
action("El señor de los anillos: El retorno del rey", "J. R. R. Tolkien", 416, 1955, true);
action("Klara y el sol", "Kazuo Ishiguro", 328, 2021, false);
action("Sapiens: De animales a dioses", "Yuval Noah Harari", 496, 2011, true);
action("Death Note Vol. 1", "Tsugumi Ohba", 200, 2003, true);
action("1984", "George Orwell", 328, 1949, true);
action("El principito", "Antoine de Saint-Exupéry", 96, 1943, false);
action("Harry Potter y la cámara secreta", "J. K. Rowling", 251, 1998, true);
action("Harry Potter y el prisionero de Azkaban", "J. K. Rowling", 317, 1999, true);
action("Harry Potter y el cáliz de fuego", "J. K. Rowling", 636, 2000, false);
action("Ready Player One", "Ernest Cline", 374, 2011, true);
action("The Martian", "Andy Weir", 369, 2011, false);

console.table(myLibrary)
//--- END TEST
function removeBook(position) {
  myLibrary.splice(position,1)
}
// --- START TEST
// removeBook(1)

// console.table(myLibrary)
// --- END TEST
//funcion para cambiar el dato read de un elmento del array
function changeRead(position) {

  if (myLibrary[position].read === false) {
    myLibrary[position].read = true
  } else myLibrary[position].read = false
}
// --- START TEST
// changeRead(0)

// console.table(myLibrary)

// changeRead(0)

// console.table(myLibrary)
// --- END TEST

// -------------con esto ya funciona back
const bodyjs = document.querySelector("body")
const container = document.getElementById("container")
const bookDialog = document.getElementById("book-dialog")
// Formualrio
const bookForm = document.getElementById("book-form")
// bottones
const addBookBtn = document.getElementById("add-book-btn")
const cancelBtnDialog = document.getElementById("cancel-btn")
const agregarBtnDialog = document.getElementById("agregar-btn")
//abre el formulario con boton agregar libro
addBookBtn.addEventListener("click", ()=> {
  bookDialog.showModal()
})
//cerrar formulario
cancelBtnDialog.addEventListener("click", ()=> {
  bookDialog.close()
})

console.log(myLibrary)

//tomar datos del formulario

bookForm.addEventListener("submit", (e)=> {
  const datos = new FormData(bookForm);
  const title = datos.get("title");
  const author = datos.get("author");
  const pages = datos.get("pages");
  const year = datos.get("year");
  const read = document.getElementById("read").checked;
  
  action(title, author, pages, year, read);
  bookForm.reset();
  showLibrary()
  
 
})

function showLibrary() {
 myLibrary.forEach((value, index)=>{
  // console.log("hola")
  // console.log("index: " + index)
  const deleteBook = document.createElement("button")
  deleteBook.innerText="delete book"
  let newDiv = document.createElement("div")
  newDiv.classList.add("libro")
  newDiv.innerHTML = `
    <h1>${myLibrary[index].title}</h1>
    <h2>${myLibrary[index].author}</h2>
    <h3>${myLibrary[index].pages}</h3>
    <h3>${myLibrary[index].year}</h3>
    <h3>${myLibrary[index].status()}</h3>
    <button>hola</button>
    `
  container.appendChild(newDiv)
  })
}
  // crear por cada elemento del array un div libro
  // div libreria que muestre todos los div libros.

// Con JS
// const divlibro = document.createElement("div")
// divlibro.classList.add("libro")
// divlibro.innerHTML = `<h1>${myLibrary[0].title}</h1>`
// container.appendChild(divlibro)
// console.log(divlibro)

// modo usuruario

showLibrary()


function adddeleteBtn (index, padre) {
  const deleteBook = document.createElement("button")
  deleteBook.innerText="delete book"

  deleteBook.addEventListener("click", ()=>{
    // console.log("la posicion es: " + index)
    removeBook(index)
    console.table(myLibrary)
    bodyjs.removeChild(container)
    showLibrary()
    

    
    
  })
}




