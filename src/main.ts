const person = {
  name: "Ingo Person",
  age: 33,
  surname: "Fahrentholz"
};

interface Book {
  author: string;
  pages?: number;
}

const book: Book = { author: "Ingo Author", pages: 300 };

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const personName = getProperty(person, "name");
const authorName = getProperty(book, "author");
const bookPages = getProperty(book, "pages");

console.log("personName", personName);
console.log("authorName", authorName);
console.log("bookPages", bookPages);

// READONLY
type MyReadonly<T> = { readonly [P in keyof T]: T[P] };

function freeze<T>(obj: T): MyReadonly<T> {
  return Object.freeze(obj);
}

const newPerson = freeze(book);

// As expected this would'nt work.
// newPerson.author = "YUSUF"
