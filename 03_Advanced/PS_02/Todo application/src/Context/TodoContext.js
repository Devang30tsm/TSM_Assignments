import React, { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo Task",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updatetodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const TodoContextProvider = TodoContext.Provider;

export const usetodo = () => {
  return useContext(TodoContext);
};
