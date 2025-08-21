import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";

export default function Layout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main className="container mx-auto w-full max-w-5xl px-4 py-6 grow">
        <Outlet />
      </main>
      <footer className="border-t py-4 text-center text-sm text-gray-500">
        React Router • Tailwind Demo
      </footer>
    </div>
  );
}