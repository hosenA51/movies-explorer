import { NavLink } from "react-router";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 text-lg shadow-lg shadow-orange-500/20">
            🎬
          </span>

          <span>
            Movie<span className="text-orange-500">Explorer</span>
          </span>
        </NavLink>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavLink
            to="/"
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
        </nav>

        {/* CTA */}
        <NavLink
          to="/movies"
          className="hidden rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20 md:block"
        >
          Explore Movies
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg border border-white/10 px-3 py-2 text-gray-300 transition hover:bg-white/5 md:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
}

export default Navbar;