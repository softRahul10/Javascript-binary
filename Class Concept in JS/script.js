console.group("Class in javaScript");

class Book {
  constructor(name, author, pages, isRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }

  /* Book.prototype methods */
  getName() {
    return this.name;
  }

  getAuthor() {
    return this.author;
  }
}

/* Object creation */
const bookOne = new Book('Time management tips','someone',1200,true);
console.log(bookOne);

console.groupEnd();
