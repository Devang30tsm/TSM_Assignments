import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-md transition duration-200 ${
      isActive
        ? "bg-white text-blue-700 font-semibold"
        : "text-white hover:bg-blue-600 hover:text-white"
    }`;

  return (
    <nav className="bg-blue-700 px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap">
        <div className="text-white font-bold text-xl">React Playground : Intermediate</div>
        <div className="flex gap-2 mt-2 md:mt-0">
          <NavLink to="/weather" className={navLinkClass}>
            Weather
          </NavLink>
          <NavLink to="/theme" className={navLinkClass}>
            Theme
          </NavLink>
          <NavLink to="/profile" className={navLinkClass}>
            Profiles
          </NavLink>
          <NavLink to="/login" className={navLinkClass}>
            Login
          </NavLink>
           <NavLink to="/users" className={navLinkClass}>
            Users
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

