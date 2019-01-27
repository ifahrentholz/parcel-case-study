interface Person {
  name: string;
  age: number;
}

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
type MyReadonly<T> = { readonly [K in keyof T]?: T[K] };

function freeze<T>(obj: T): MyReadonly<T> {
  return Object.freeze(obj);
}

const newPerson = freeze(book);

// As expected this would'nt work.
// newPerson.author = "YUSUF"

// Demo code since Typescript has that logic build in via "Partial"
type MyPartial<T> = { [K in keyof T]?: T[K] };

// Partial is build in Typescript. For demo purposes we created our own partial
// logic in "MyPartial" to illustrate the logic behind.
function updatePerson(person: Person, prop: Partial<Person>) {
  return { ...person, ...prop };
}

const partialPerson = updatePerson(person, { age: 43 });
console.log(partialPerson);

interface Bob {
  name?: string;
  age?: number;
}

type SetRequired<T> = { [K in keyof T]-?: T[K] };

function printBob(person: Required<Bob>) {
  return `${person.name} is ${person.age}`;
}

const bobPerson: Required<Bob> = {
  name: "Ingo Bob",
  age: 33
};

const bobAge = printBob(bobPerson);
