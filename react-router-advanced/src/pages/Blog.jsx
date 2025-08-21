import { Link } from "react-router-dom";

const posts = [
  { slug: "react-router-basics", title: "React Router Basics" },
  { slug: "nested-routes-like-a-pro", title: "Nested Routes Like a Pro" },
  { slug: "protecting-private-pages", title: "Protecting Private Pages" },
];

export default function Blog() {
  return (
    <section>
      <h1 className="text-2xl font-extrabold mb-4">Vicks Blog</h1>
      <ul className="space-y-2">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link
              to={`/blog/${p.slug}`}
              className="block rounded-lg border p-3 hover:bg-gray-50"
            >
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}