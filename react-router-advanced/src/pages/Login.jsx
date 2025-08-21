import { useState } from "react";
import { useAuth } from "../auth/useAuth.js";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const from = state?.from?.pathname || "/profile";

  const onSubmit = (e) => {
    e.preventDefault();
    login(name || "Guest");
    navigate(from, { replace: true });
  };

  return (
    <section className="max-w-sm">
      <h1 className="text-2xl font-semibold mb-3">Login</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <label className="block">
          <span className="text-sm text-gray-700">Name (optional)</span>
          <input
            className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </label>
        <button className="w-full rounded-lg bg-blue-600 px-3 py-2 text-white hover:bg-blue-700">
          Sign in
        </button>
      </form>
      <p className="mt-2 text-xs text-gray-500">
        Tip: Try visiting <code>/profile</code> while logged out to see the
        redirect.
      </p>
    </section>
  );
}