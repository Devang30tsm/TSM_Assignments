// src/components/Todos.js
import useFetch from "../Hooks/useFetch";

function Todos() {
  const { data: todos, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos");

  if (loading) return <p>Loading todos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">✅ Todo List</h2>
      <ul>
        {todos?.slice(0, 10).map((todo) => (
          <li key={todo.id}>
            {todo.title} - <span className={todo.completed ? "text-green-600" : "text-red-600"}>{todo.completed ? "Done" : "Pending"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
