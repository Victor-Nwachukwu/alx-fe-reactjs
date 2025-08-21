import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../auth/useAuth.js";

const tab = ({ isActive }) =>
  `px-3 py-2 rounded-lg text-sm ${
    isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
  }`;

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="border-b">
      <div className="container mx-auto max-w-5xl px-4 h-14 flex items-center gap-3">
        <Link to="/" className="font-semibold text-blue-700">
          RR Advanced
        </Link>
        <nav className="flex gap-2">
          <NavLink to="/" end className={tab}>
            Home
          </NavLink>
          <NavLink to="/blog" className={tab}>
            Blog
          </NavLink>
          <NavLink to="/profile" className={tab}>
            Profile
          </NavLink>
        </nav>
        <div className="ml-auto">
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-700">Hi, {user.name}</span>
              <button
                onClick={logout}
                className="text-sm rounded-lg border px-3 py-2 hover:bg-gray-50"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="text-sm rounded-lg border px-3 py-2 hover:bg-gray-50"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
}