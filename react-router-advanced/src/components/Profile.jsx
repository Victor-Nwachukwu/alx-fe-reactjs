import { Routes, Route, NavLink } from "react-router-dom";
import ProfileDetails from "./ProfileDetails.jsx";
import ProfileSettings from "./ProfileSettings.jsx";

export default function Profile() {
  return (
    <section className="p-4">
      <h1 className="text-2xl font-semibold mb-4">My Profile</h1>
      <nav className="flex gap-3 mb-4">
        <NavLink to="details">Details</NavLink>
        <NavLink to="settings">Settings</NavLink>
      </nav>

      <Routes>
        <Route index element={<ProfileDetails />} />
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </section>
  );
}