import { Link } from "react-router-dom";

function SongsHeroSection() {
  return (
    <section className="bg-[#FDFBF7]">
      <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-16 md:py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#775A19]">
            Telangana Folk Music
          </p>

          <h1 className="font-serif text-4xl font-bold leading-tight text-[#570000] md:text-5xl">
            Explore Telangana Folk Songs
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5A413D]">
            Discover the traditional sounds, rhythms and stories of
            Telangana folk music.
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6B5A56]">
            Songs and recordings will be added to this platform with the
            appropriate ownership or permissions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/categories"
              className="rounded-full bg-[#570000] px-8 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5A0000]"
            >
              Browse Categories
            </Link>

            <Link
              to="/artists"
              className="rounded-full border-[1.5px] border-[#DBC18D] px-8 py-3 text-sm font-semibold text-[#570000] transition hover:-translate-y-0.5 hover:bg-[#DBC18D]/10"
            >
              Explore Artists
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SongsHeroSection;