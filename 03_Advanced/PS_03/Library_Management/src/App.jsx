import React from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import { LibraryProvider } from "./Context/LibraryContext";

const App = () => {
  return (
    <LibraryProvider>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Library
          </h1>
          <div className="mb-4">
            <BookForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            <BookList />
          </div>
        </div>
      </div>
    </LibraryProvider>
  );
};

export default App;