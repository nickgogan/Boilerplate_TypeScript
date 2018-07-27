type Book = {
  title: string;
  author: string;
  available: boolean;
};

function GetAllBooksBad(): Book[] {
  let books = [
    {
      title: 'Ulysses',
      author: 'Joyce',
      available: true,
    },
    {
      title: 'A Farewell to Arms',
      author: 'Hemmingway',
      available: false,
    },
    {
      title: 'I Know Why the Caged Bird Sings',
      author: 'Angelou',
      available: true,
    },
  ];

  return books;
}

function LogFirstAvailableBad(books: Book[]): void {
  let numberOfBooks = books.length;
  var availableBook: string;

  for (let book of books) {
    if (book.available) {
      availableBook = book.title;
      console.log(`First available book: ${availableBook}`);
      break;
    }
  }

  console.log(`Total Books: ${numberOfBooks}`);
}

let someBooks = GetAllBooksBad();
LogFirstAvailableBad(allBooks);
