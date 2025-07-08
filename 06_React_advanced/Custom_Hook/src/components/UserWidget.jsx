import useFetch from "../Hooks/useFetch";
import { FaUsers } from "react-icons/fa";

function UsersWidget() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p className="text-white">Loading users...</p>;
  if (error) throw new Error("Failed to fetch users.");

  return (
    <div className="p-6 bg-white/10 backdrop-blur border border-white/20 shadow-lg rounded-xl text-white">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">👤 Users</h3>
        <FaUsers className="text-white/70" size={22} />
      </div>
      <ul className="space-y-2 text-sm">
        {data?.slice(0, 5).map((user) => (
          <li key={user.id} className="border-b border-white/10 pb-1">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersWidget;
