import { useState } from "react";
import { useLibrary } from "../Context/LibraryContext";

const BookItem = ({ book }) => {
  const { deleteBook, editBook } = useLibrary();
  const [isEditable, setIsEditable] = useState(false);
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);

  const handleEdit = () => {
    editBook(book.id, { ...book, title, author });
    setIsEditable(false);
  };

  return (
    <div className="flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black bg-[#9553c7]">
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isEditable ? "border-black/10 px-2" : "border-transparent"
        } text-white placeholder-white/60`}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        readOnly={!isEditable}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isEditable ? "border-black/10 px-2" : "border-transparent"
        } text-white placeholder-white/60`}
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        readOnly={!isEditable}
      />
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (isEditable) {
            handleEdit();
          } else setIsEditable((prev) => !prev);
        }}
      >
        {isEditable ? "📁" : "✏️"}
      </button>
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteBook(book.id)}
      >
        ❌
      </button>
    </div>
  );
};

export default BookItem;
