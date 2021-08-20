// const setEditModal = (isbn) => {
//     // We will implement this later
// }

// const deleteBook = (isbn) => {
//     // We will implement this later
// }

const setEditModal = (isbn) => {
    // Get information about the book using isbn
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", `http://localhost:3000/book/${isbn}`, false);
    xhttp.send();

    const book = JSON.parse(xhttp.responseText);

    const {
        title,
        author,
        publisher,
        publish_date, 
        numOfPages
    } = book;

    // Filling information about the book in the form inside the modal
    document.getElementById('isbn').value = isbn;
    document.getElementById('title').value = title;
    document.getElementById('author').value = author;
    document.getElementById('publisher').value = publisher;
    document.getElementById('publish_date').value = publish_date;
    document.getElementById('numOfPages').value = numOfPages;

    // Setting up the action url for the book
    document.getElementById('editForm').action = `http://localhost:3000/book/${isbn}`;
}


const deleteBook = (isbn) => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("DELETE", `http://localhost:3000/book/${isbn}`, false);
    xhttp.send();

    // Reloading the page
    location.reload();
}

const loadBooks = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:3000/books", false);
    xhttp.send();

    const books = JSON.parse(xhttp.responseText);
    // console.log("hello");
    for (let book of books) {
        const x = `
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title">Title:  &#8216;${book.title}&#8217;</h5>
                        <h3 class="card-subtitle mb-2 text-muted">ISBN: ${book.isbn}</h6>

                        <div>Author:   <i>${book.author}</i></div>
                        <div>Publisher:   <i>${book.publisher}</i></div>
                        <div>Date of Publication:    <i>${book.publish_date}</i></div>
                        <div>Number of Pages:    <i>${book.numOfPages}</i></div>

                        <hr>

                        <button type="button" class="btn btn-danger" data-toggle="modal"          
                            data-target="#editBookModal" onClick="deleteBook(${book.isbn})">
                            Delete
                        </button>
                        <button types="button" class="btn btn-primary" data-toggle="modal"
                            data-target="#editBookModal" onClick="setEditModal(${book.isbn})">
                            Edit
                        </button>


                        <hr>
                        <hr>

                    </div>
                </div>
            </div>
        `

        document.getElementById('books').innerHTML = document.getElementById('books').innerHTML + x;
    }
}

loadBooks();

///// here the instructions didn't have the button code working [Line 41], so I reverse engineered it from the working edit button