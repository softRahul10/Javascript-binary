function Book(name,author,pages,haveYouRead) {
      this.name = name;
      this.author = author;
      this.pages = pages;
      this.haveYouRead = haveYouRead;
}

const bookOne = new Book('Attitude is Everything','Unknown',300,true);
const bookTwo = new Book('5AM Club','Robin Sharma',500,false);

console.log(Object.getPrototypeOf(bookOne))