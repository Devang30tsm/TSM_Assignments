// app/layout.jsx
import './globals.css'

export const metadata = {
  title: 'Blog App',
  description: 'Blog rendered via App Router + Tailwind',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <main className="max-w-3xl mx-auto p-6">{children}</main>
      </body>
    </html>
  )
}
