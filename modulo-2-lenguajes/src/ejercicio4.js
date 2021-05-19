// 4. Read books

const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];

function isBookRead(books, titleToSearch) {
    const book = books.find(book => book.title === titleToSearch);
    return book ? book.isRead : `${false}... There is no book with this title`;
}

console.log(isBookRead(books, "El señor de los anillos"));
console.log(isBookRead(books, "Harry Potter y la piedra filosofal"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Devastación"));