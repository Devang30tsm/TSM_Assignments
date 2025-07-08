import useFetch from "../Hooks/useFetch";
import { FaRegNewspaper } from "react-icons/fa";

function PostsWidget() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>Loading posts...</p>;
  if (error) throw new Error("Failed to fetch posts.");

  return (
    <div className="p-6 bg-white/10 backdrop-blur border border-white/20 shadow-lg rounded-xl text-white">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">📝 Recent Posts</h3>
        <FaRegNewspaper className="text-white/70" size={22} />
      </div>
      <ul className="space-y-2 text-sm">
        {data?.slice(0, 3).map((post) => (
          <li key={post.id} className="border-b border-white/10 pb-1">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsWidget;

