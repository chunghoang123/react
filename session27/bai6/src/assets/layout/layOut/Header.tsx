import { NavLink } from "react-router-dom";

export default function Header() {
  const linkClass =
    "px-4 py-2 mx-2 rounded transition-colors duration-200";

  return (
    <nav className="flex justify-center space-x-4 mt-4">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive
            ? `${linkClass} bg-red-500 text-white`
            : `${linkClass} text-black`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/product"
        className={({ isActive }) =>
          isActive
            ? `${linkClass} bg-red-500 text-white`
            : `${linkClass} text-black`
        }
      >
        Product
      </NavLink>

      <NavLink
        to="/detail"
        className={({ isActive }) =>
          isActive
            ? `${linkClass} bg-red-500 text-white`
            : `${linkClass} text-black`
        }
      >
        Detail
      </NavLink>
    </nav>
  );
}
