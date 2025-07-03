import { useLibrary } from "../Context/LibraryContext";
import BookItem from "./BookItem";

const BookList = () => {
  const { books } = useLibrary();

  return (
    <>
      {books.map((book) => (
        <div key={book.id} className="w-full">
          <BookItem book={book} />
        </div>
      ))}
    </>
  );
};

export default BookList;