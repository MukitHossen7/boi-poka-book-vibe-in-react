import { useEffect } from "react";
import { useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("./booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  console.log(books);
  return (
    <div className="pt-20">
      <h2 className="font-bold text-4xl text-center">Books</h2>

      <div>
        {books.map((book) => (
          <Book key={book.bookId}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
