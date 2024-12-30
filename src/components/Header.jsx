import { useState } from "react";
import { NavLink } from "react-router";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-white/25 backdrop-blur-lg sticky top-0 w-full z-50">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <NavLink to="/">
          <span className="sr-only">Home</span>

          <img className="h-8 w-auto" src="/logo.png" alt="" />
        </NavLink>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav
            aria-label="Global"
            className={`${
              isMenuOpen
                ? "block fixed top-16 right-0 z-50 bg-white p-5 "
                : "hidden"
            } lg:static lg:p-0 md:block md:bg-transparent`}
          >
            <ul className="flex flex-col lg:flex-row items-center gap-6 text-sm">
              <li>
                <NavLink
                  to="/about"
                  className="text-gray-500 transition hover:text-gray-500/75"
                  onClick={() => setMenuOpen(!isMenuOpen)}
                >
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className="text-gray-500 transition hover:text-gray-500/75"
                  onClick={() => setMenuOpen(!isMenuOpen)}
                >
                  Contact
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/branches"
                  className="text-gray-500 transition hover:text-gray-500/75"
                  onClick={() => setMenuOpen(!isMenuOpen)}
                >
                  Branches
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
