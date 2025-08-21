import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();

  return (
    <article className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Blog Post #{id}</h1>
      <p className="text-gray-600 leading-relaxed mb-6">
        This is the content for blog post{" "}
        <span className="font-semibold text-gray-800">{id}</span>. You can fetch
        data from an API or a database here to show the full article content.
      </p>

      <div className="border-t border-gray-200 pt-4">
        <p className="text-sm text-gray-500">
          Posted on <span className="italic">August 21, 2025</span> by{" "}
          <span className="font-medium text-gray-700">Author Name</span>
        </p>
      </div>
    </article>
  );
}