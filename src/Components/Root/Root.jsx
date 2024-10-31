import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { createContext, useEffect } from "react";
import { useState } from "react";

export const BooksContext = createContext();

const Root = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("./booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <BooksContext.Provider value={{ books }}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </BooksContext.Provider>
    </div>
  );
};

export default Root;
