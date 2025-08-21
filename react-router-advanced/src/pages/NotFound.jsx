import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className="space-y-2">
      <h1 className="text-2xl font-semibold">404 — Not Found</h1>
      <Link to="/" className="text-blue-700 hover:underline">
        Go Home
      </Link>
    </section>
  );
}