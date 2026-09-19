
import { useState } from "react";
import { NavLink } from "react-router";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 text-lg shadow-lg shadow-orange-500/20">
              🎬
            </span>

            <span>
              Movie<span className="text-orange-500">Explorer</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              Movies
            </NavLink>

            <NavLink
              to="/movies"
              className="rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20"
            >
              Explore Movies
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-lg border border-white/10 px-3 py-2 text-gray-300 transition hover:bg-white/5 hover:text-white md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="border-t border-white/10 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              <NavLink
                to="/"
                end
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-orange-500/10 text-orange-500"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/movies"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-orange-500/10 text-orange-500"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                Movies
              </NavLink>

              <NavLink
                to="/movies"
                onClick={closeMenu}
                className="mt-2 rounded-lg bg-orange-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Explore Movies
              </NavLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;