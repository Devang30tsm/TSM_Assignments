import useFetch from "../Hooks/useFetch";

function PostsList() {
  const { data: posts, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");
  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">📚 Blog Posts</h2>
      <ul>
        {posts?.slice(0, 10).map((post) => (
          <li key={post.id} className="mb-2">
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsList;
