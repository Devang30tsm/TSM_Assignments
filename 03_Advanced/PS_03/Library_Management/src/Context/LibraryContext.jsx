// LibraryContext.jsx
import { createContext, useContext, useState } from "react";

const LibraryContext = createContext();
export const useLibrary = () => useContext(LibraryContext);

export const LibraryProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks((prev) => [...prev, { ...book, id: Date.now() }]);
  };

  const deleteBook = (id) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  };

  const editBook = (id, updatedBook) => {
    setBooks((prev) =>
      prev.map((book) => (book.id === id ? { ...book, ...updatedBook } : book))
    );
  };

  return (
    <LibraryContext.Provider value={{ books, addBook, deleteBook, editBook }}>
      {children}
    </LibraryContext.Provider>
  );
};