const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

let books = [];

app.use(cors());
app.use(express.static(path.join(__dirname, 'Public')));  ///// it was giving 404 errors on the "book-list.js" - this fixed it
                                                          ///// this allows you to serve everything in the public folder
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    // res.send('good bye');
    // res.sendFile('new-book.html', { root: __dirname });
    res.sendFile('book-list.html', { root: __dirname });   //// << was missing, which finally made the button work
});

app.get('/books', (req, res) => {
    res.json(books);
});

app.post('/book', (req, res) => {
    const book = req.body;
    
    books.push(book);

    res.send('Book is added to the database');
});

///////// Locating the Book in Array //////////

app.get('/book/:isbn', (req, res) => {                         // he had a typo here ... 'books' was plural
    // Reading isbn from the URL
    const isbn = req.params.isbn;

    // Searching books for the isbn
    for (let book of books) {
        if (book.isbn === isbn) {
            res.json(book);
            return;
        }
    }

    // Sending 404 when not found something is a good practice
    res.status(404).send('Book not found');
});

////////// Editing the Books ////////////

app.post('/book/:isbn', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.isbn;
    const newBook = req.body;

    // Remove item from the books array
    for (let i = 0; i < books.length; i++) {
        let book = books[i]
        if (book.isbn === isbn) {
            books[i] = newBook;
        }
    }

    res.send('Book is edited');
});

//////////// Deleting the Book ///////////

app.delete('/book/:isbn', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.isbn;

    // Remove item from the books array
    books = books.filter(i => {
        if (i.isbn !== isbn) {
            return true;
        }
        return false;
    });

    res.send('Book is deleted');
});



app.listen(port, () => console.log(`Hello World App is listening on port ${port}!`));


// app.post('/book', (req, res) => {
//     const book = req.body;

//     //output the book to the console for debugging
//     console.log(book);
//     books.push(book);

   
// });