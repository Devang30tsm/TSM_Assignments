import { useState } from "react";
import { useLibrary } from "../Context/LibraryContext";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const { addBook } = useLibrary();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) return;
    addBook({ title, author });
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        placeholder="Book Title"
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5 text-white placeholder-white/60"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        className="w-full border-t border-b border-black/10 px-3 outline-none duration-150 bg-white/20 py-1.5 text-white placeholder-white/60"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
};

export default BookForm;
