import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-[#e2bfb9] bg-[#f6f3f2]">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              to="/"
              className="font-[Playfair_Display] text-2xl font-bold text-[#570000]"
            >
              Telangana Folk Songs
            </Link>

            <p className="mt-4 max-w-md font-[Inter] text-base leading-7 text-[#5a413d]">
              Preserving the rhythm of the soil and celebrating the rich
              musical traditions of Telangana.
            </p>

            <p className="mt-6 font-[Inter] text-xs font-medium uppercase tracking-wider text-[#8e706c]">
              Preserving the rhythm of the soil.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dbc18d] text-[#570000] transition hover:-translate-y-0.5 hover:bg-[#570000] hover:text-white"
              >
                <span className="font-[Inter] text-xs font-bold">YT</span>
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dbc18d] text-[#570000] transition hover:-translate-y-0.5 hover:bg-[#570000] hover:text-white"
              >
                <span className="font-[Inter] text-xs font-bold">IG</span>
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dbc18d] text-[#570000] transition hover:-translate-y-0.5 hover:bg-[#570000] hover:text-white"
              >
                <span className="font-[Inter] text-sm font-bold">f</span>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-[Inter] text-sm font-semibold uppercase tracking-wider text-[#570000]">
              Explore
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                to="/songs"
                className="font-[Inter] text-sm text-[#5a413d] transition hover:text-[#570000]"
              >
                Songs
              </Link>

              <Link
                to="/artists"
                className="font-[Inter] text-sm text-[#5a413d] transition hover:text-[#570000]"
              >
                Artists
              </Link>

              <Link
                to="/categories"
                className="font-[Inter] text-sm text-[#5a413d] transition hover:text-[#570000]"
              >
                Categories
              </Link>

              <Link
                to="/videos"
                className="font-[Inter] text-sm text-[#5a413d] transition hover:text-[#570000]"
              >
                Videos
              </Link>

              <Link
                to="/blogs"
                className="font-[Inter] text-sm text-[#5a413d] transition hover:text-[#570000]"
              >
                Blogs
              </Link>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-[Inter] text-sm font-semibold uppercase tracking-wider text-[#570000]">
              Information
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                to="/about"
                className="font-[Inter] text-sm text-[#5a413d] transition hover:text-[#570000]"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="font-[Inter] text-sm text-[#5a413d] transition hover:text-[#570000]"
              >
                Contact
              </Link>

              <Link
                to="/privacy-policy"
                className="font-[Inter] text-sm text-[#5a413d] transition hover:text-[#570000]"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="font-[Inter] text-sm text-[#5a413d] transition hover:text-[#570000]"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-[#e2bfb9]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-center md:flex-row md:items-center md:justify-between md:px-16 md:text-left">
          <p className="font-[Inter] text-xs text-[#8e706c]">
            © {new Date().getFullYear()} Telangana Folk Songs. All rights
            reserved.
          </p>

          <p className="font-[Inter] text-xs text-[#8e706c]">
            A digital archive of Telangana&apos;s folk heritage.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;