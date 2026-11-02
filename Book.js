const myLibrary = [];
const libDiv = document.querySelector('.library');

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("Must use 'new' when calling constructor")
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    console.log(read)

    this.info = function() {
        if (read === 'true') {
            return title + " by " + author + ", " + pages + " pages, read"
        }
        else {
            return title + " by " + author + ", " + pages + " pages, not read yet"
        }
    }
}

function addBookToLibrary(title, author, pages, read) {
    let newBook =  new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBooks() {
    for (const book of myLibrary) {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        const p = document.createElement("p");
        const textDiv = document.createTextNode(book.info());
        p.appendChild(textDiv);
        bookDiv.appendChild(p);
        libDiv.appendChild(bookDiv);
    }
}

const submit = document.querySelector('input[name="submit"]');

function submitListener(event) {


    
}

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary(document.getElementById('title').value, document.getElementById('author').value, document.getElementById('pages').value, document.querySelector('input[name="read_bool"]:checked').value);
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    const p = document.createElement("p");
    const textDiv = document.createTextNode(myLibrary.at(-1).info());
    p.appendChild(textDiv);
    bookDiv.appendChild(p);
    libDiv.appendChild(bookDiv);
});

addBookToLibrary("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 200, 'true');
addBookToLibrary("Mobile Suit Gundam", "Yoshiyuki Tomino", 520, 'false');
addBookToLibrary("The London Concensus", "Tim Besley, Irene Bucelli, and Andreas Velasco", 654, 'true');

displayBooks();