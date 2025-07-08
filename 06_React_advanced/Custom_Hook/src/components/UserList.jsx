// src/components/UsersList.js
import useFetch from "../Hooks/useFetch";

function UsersList() {
  const { data: users, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">👤 User List</h2>
      <ul>
        {users?.map((user) => (
          <li key={user.id} className="mb-2">
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
