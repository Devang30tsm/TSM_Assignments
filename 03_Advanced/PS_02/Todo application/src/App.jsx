import { useState, useEffect, usetodo } from "react";
import "./App.css";
import { TodoContextProvider } from "./Context/TodoContext";
import TodoForm from "./Components/Todoform";
import TodoItem from "./Components/TodoItem";
function App() {
  const [todos, settodos] = useState([]);

  const addTodo = (todo) => {
    settodos((prevarr) => [...prevarr, { id: Date.now(), ...todo }]);
  };

  const updatetodo = (id, todo) => {
    settodos((prevarr) =>
      prevarr.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo))
    );
  };

  const deleteTodo = (id) => {
    settodos((prevarr) => prevarr.filter((prevtodo) => prevtodo.id !== id));
  };

  const toggleComplete = (id) => {
    settodos((prevarr) =>
      prevarr.map((prevtodo) =>
        prevtodo.id === id
          ? { ...prevtodo, completed: !prevtodo.completed }
          : prevtodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      settodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ todos, addTodo, updatetodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
