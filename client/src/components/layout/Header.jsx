import React from "react";
import { Link, NavLink } from "react-router-dom";
import { DOMAIN } from "../../utils/constants";

function Header() {
  return (
    <header className="top-0 py-1">
      <div className="container">
        <nav className="flex gap-2 flex-wrap flex-row justify-between items-center ">
          <Link to={"/"}>
            <span className="inline-flex gap-1 text-md md:text-3xl items-center font-semibold tracking-wide">
              <img
                src={`${DOMAIN}/logo.png`}
                alt="LOGO"
                className="w-20 md:w-28"
              />
              Library
            </span>
          </Link>
          <ul className="flex gap-3 flex-wrap flex-row justify-between items-center">
            <li>
              <NavLink
                to="/authors"
                className={({ isActive }) =>
                  `hover:text-sky-900  p-2 rounded-md ${
                    !isActive ? "text-sky-500" : "bg-indigo-400 text-indigo-50"
                  } font-semibold `
                }
              >
                Authors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/books"
                className={({ isActive }) =>
                  `hover:text-sky-900  p-2 rounded-md ${
                    !isActive ? "text-sky-500" : "bg-indigo-400 text-indigo-50"
                  } font-semibold `
                }
              >
                Books
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
