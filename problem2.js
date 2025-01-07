//2. Task: Object Manipulation
const books = [
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
];

function getBookTitles(books) {
  return books.map(book => book.title); 
}

console.log(getBookTitles(books));
