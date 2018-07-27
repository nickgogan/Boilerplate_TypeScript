interface IBook {
  author: string;
  available: boolean;
  title: string;
}

function GetAllBooks(): IBook[] {
  const books = [
    {
      author: 'Joyce',
      available: true,
      title: 'Ulysses',
    },
    {
      author: 'Hemmingway',
      available: false,
      title: 'A Farewell to Arms',
    },
    {
      author: 'Angelou',
      available: true,
      title: 'I Know Why the Caged Bird Sings',
    },
  ];

  return books;
}

function LogFirstAvailable(books: IBook[]): void {
  const numberOfBooks = books.length;
  let availableBook: string;

  for (const book of books) {
    if (book.available) {
      availableBook = book.title;
      console.log(`First available book: ${availableBook}`);
      break;
    }
  }

  console.log(`Total Books: ${numberOfBooks}`);
}

const allBooks = GetAllBooks();
LogFirstAvailable(allBooks);
