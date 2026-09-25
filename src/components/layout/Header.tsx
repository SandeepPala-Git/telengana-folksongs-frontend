import { useState } from "react";
import { Crown, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Songs", path: "/songs" },
    { name: "Artists", path: "/artists" },
    { name: "Categories", path: "/categories" },
    { name: "Videos", path: "/videos" },
    { name: "Blogs", path: "/blogs" },
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#E2BFB9] bg-[#FDFBF7]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8 lg:px-16">
        {/* Logo / Brand */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="shrink-0"
        >
          <div className="font-serif text-xl font-bold tracking-tight text-[#570000] md:text-2xl">
            Telangana Folk Songs
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                [
                  "relative py-2 text-sm font-semibold tracking-wide transition-colors",
                  isActive
                    ? "text-[#570000] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#570000]"
                    : "text-[#5A413D] hover:text-[#570000]",
                ].join(" ")
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            to="/login"
            className="text-sm font-semibold tracking-wide text-[#570000] transition hover:text-[#5A0000] hover:underline"
          >
            Login
          </Link>

          <Link
            to="/subscription"
            className="flex items-center gap-2 rounded-full bg-[#570000] px-5 py-2.5 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:bg-[#5A0000]"
            style={{ color: "#FFFFFF" }}
          >
            <Crown size={17} />
            Subscribe
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen((previous) => !previous)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#570000] transition hover:bg-[#570000]/5 lg:hidden"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-[#E2BFB9] bg-[#FDFBF7] lg:hidden">
          <div className="mx-auto max-w-7xl px-5 py-5 md:px-8">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    [
                      "rounded-xl px-4 py-3 text-sm font-semibold tracking-wide transition",
                      isActive
                        ? "bg-[#570000]/5 text-[#570000]"
                        : "text-[#5A413D] hover:bg-[#570000]/5 hover:text-[#570000]",
                    ].join(" ")
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Actions */}
            <div className="mt-5 flex gap-3 border-t border-[#E2BFB9] pt-5">
              <Link
                to="/login"
                onClick={closeMobileMenu}
                className="flex flex-1 items-center justify-center rounded-full border-[1.5px] border-[#DBC18D] px-4 py-2.5 text-sm font-semibold text-[#570000] transition hover:bg-[#DBC18D]/10"
              >
                Login
              </Link>

              <Link
                to="/subscription"
                onClick={closeMobileMenu}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#570000] px-5 py-2.5 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:bg-[#5A0000]"
                style={{ color: "#FFFFFF" }}
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;