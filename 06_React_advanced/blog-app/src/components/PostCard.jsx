export default function PostCard({ post }) {
  return (
    <div className="p-4 border border-gray-300 bg-white rounded shadow-sm hover:shadow-md transition">
      <h2 className="text-xl text-black font-semibold mb-2 capitalize">{post.title}</h2>
      <p className="text-gray-700">{post.body}</p>
    </div>
  )
}
