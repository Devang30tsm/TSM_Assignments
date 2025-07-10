// app/page.jsx
import PostCard from '@/components/PostCard'

export default async function HomePage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">📝 Blog Posts</h1>
      <div className="space-y-4">
        {posts?.slice(0, 20).map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
