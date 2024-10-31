// import Book from "../Book/Book";
import { useContext } from "react";
import { BooksContext } from "../Root/Root";
import { CiStar } from "react-icons/ci";
const Books = () => {
  const { books } = useContext(BooksContext);
  console.log(books.length);
  return (
    <div className="pt-20">
      <h2 className="font-bold text-4xl text-center">Books</h2>

      <div className="grid grid-cols-3 gap-5">
        {books.map((book) => (
          <div
            key={book.bookId}
            className="card p-6 border border-slate-200 mt-10"
          >
            <figure className="bg-slate-100 rounded-xl py-12">
              <img
                src={book.image}
                alt="books"
                className="h-48  w-48 object-cover rounded-xl"
              />
            </figure>
            <div className="">
              <div className="pt-5 flex flex-row gap-3">
                <button className="text-[#23BE0A] font-medium bg-gray-100 px-3 py-1 rounded-full">
                  Young Adult{" "}
                </button>
                <button className="text-[#23BE0A] font-medium bg-gray-100 px-3 py-1 rounded-full">
                  Identity
                </button>
              </div>
              <div className="border-dashed border-b border-slate-400 pb-4">
                <h2 className="card-title pt-5">{book.bookName}</h2>
                <h3 className="font-medium text-gray-400 pt-2">
                  By : {book.author}
                </h3>
              </div>
              <div className="pt-3 flex items-center justify-between">
                <p className="font-medium">{book.category}</p>
                <div className="flex items-center gap-2">
                  <p className="font-medium text-gray-700">{book.rating}</p>

                  <CiStar className="text-gray-800 text-xl" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
