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

function removeBook(position) {
  myLibrary.splice(position,1)
}

removeBook(1)

console.table(myLibrary)

//funcion para cambiar el dato read de un elmento del array
function changeRead(position) {

  if (myLibrary[position].read === false) {
    myLibrary[position].read = true
  } else myLibrary[position].read = false
}

changeRead(0)

console.table(myLibrary)

changeRead(0)

console.table(myLibrary)

// con esto ya funciona back

