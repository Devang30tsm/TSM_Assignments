import React from "react";
import PostsList from "./components/PostsList";
import UsersList from "./components/UserList";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="p-6 space-y-6">
      <PostsList />
      <UsersList />
      <Todos />
    </div>
  );
}

export default App;
