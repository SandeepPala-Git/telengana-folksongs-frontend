import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 pb-20 pt-16 md:px-16">
      <div className="flex flex-col items-center gap-10 lg:flex-row">

        {/* Hero Content */}
        <div className="z-10 w-full space-y-8 lg:w-1/2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#775A19]">
              The Voice of Telangana
            </p>

            <h1 className="font-serif text-4xl font-bold leading-tight text-[#570000] md:text-5xl">
              Telangana Folk Songs
            </h1>
          </div>

          <p className="max-w-md text-lg leading-10 text-[#5A413D]">
            Discover the voice, rhythm and traditions of Telangana.
          </p>

          <div className="flex flex-wrap gap-4">

            {/* Explore Songs */}
            <Link
              to="/songs"
              className="flex items-center gap-2 rounded-full bg-[#570000] px-8 py-3 text-sm font-semibold text-white! transition hover:-translate-y-0.5 hover:bg-[#5A0000]"
            >
              Explore Songs
              <span aria-hidden="true">→</span>
            </Link>

            {/* Explore Artists */}
            <Link
              to="/artists"
              className="rounded-full border-[1.5px] border-[#DBC18D] px-8 py-3 text-sm font-semibold text-[#570000] transition hover:-translate-y-0.5 hover:bg-[#DBC18D]/10"
            >
              Explore Artists
            </Link>

          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-[#DBC18D] shadow-[0_8px_32px_rgba(90,0,0,0.05)]">

            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_fZxJpPuHtSqNe_vtsJObkTycRDe3PxUNZ7FEhOrrsjdynWjAF3PiZMxFfg14Hf2pvzleEuEBiuTf3ZOxH_4EUDS2pFbpvrdYIE4UzDi3edTAZE4SVBdRKTvpKnXi2sy84J21sP2qQit2eMhYC7N5yuMknMk7y6Uy_wXgQFZQFh74S-rEQBwp7iznHnabLLDjDdzD0LRCUOSzSVAkQ0xaq3q2lZJq-IHTpaipmEpJhK_bDzJ-6RCdKA"
              alt="Traditional Telangana folk performance"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;