const books = [
    {
        title: 'A tale of two cities',
        author: 'charles Dickens',
        year:1859,
    },

    {
        title: 'The little prince',
        author: 'Antoine de Exupery',
        year:1943,
    },

    {
        title: 'Harry potter',
        author: 'j.k rowling',
        year:1997,
    },

    {
        title: 'And then there were none',
        author: 'Agatha christine',
        year:1939,
    },
];

function logTitles(bookTitles){
    bookTitles.sort();
    console.log(bookTitles.join(', '));
};

function extractTitles(books,callback){
    const bookTitles = books.map((book) => book.title)
    callback(bookTitles);
};

extractTitles(books,logTitles)