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
        <div className="text-white font-bold text-xl">React Playground : Beginer</div>
        <div className="flex gap-2 mt-2 md:mt-0">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/hobby" className={navLinkClass}>
            Hobby
          </NavLink>
          {/* <NavLink to="/profiles" className={navLinkClass}>
            Profiles
          </NavLink> */}
          <NavLink to="/counter" className={navLinkClass}>
            Counter
          </NavLink>
          <NavLink to="/input" className={navLinkClass}>
            Input Form
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
