import { Link } from "react-router-dom";
import { Lock, Play } from "lucide-react";

const featuredSongs = [
  {
    title: "Telangana Folk Collection",
    artist: "Coming Soon",
    category: "Traditional",
  },
  {
    title: "Festival Folk Collection",
    artist: "Coming Soon",
    category: "Festival",
  },
  {
    title: "Village Folk Collection",
    artist: "Coming Soon",
    category: "Village",
  },
];

function FeaturedSongsSection() {
  return (
    <section className="bg-[#FDFBF7] py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-5 md:px-16">
        {/* Section Heading */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#775A19]">
              Music Library
            </p>

            <h2 className="font-serif text-3xl font-bold text-[#570000] md:text-4xl">
              Featured Songs
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5A413D]">
              Songs and recordings will appear here as they are officially
              added to the Telangana Folk Songs library.
            </p>
          </div>

          <Link
            to="/categories"
            className="text-sm font-semibold text-[#570000] transition hover:text-[#775A19]"
          >
            Browse Categories →
          </Link>
        </div>

        {/* Song Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {featuredSongs.map((song) => (
            <article
              key={song.title}
              className="overflow-hidden rounded-[20px] border border-[#DBC18D] bg-white shadow-[0_4px_20px_rgba(87,0,0,0.04)]"
            >
              {/* Placeholder Artwork */}
              <div className="relative flex aspect-[16/10] items-center justify-center bg-[#E8E0D8]">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#570000] text-white">
                  <Play size={26} fill="currentColor" />
                </div>

                <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#570000]">
                  <Lock size={13} />
                  Coming Soon
                </div>
              </div>

              {/* Song Information */}
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#775A19]">
                  {song.category}
                </p>

                <h3 className="mt-2 font-serif text-xl font-semibold text-[#570000]">
                  {song.title}
                </h3>

                <p className="mt-2 text-sm text-[#6B5A56]">
                  {song.artist}
                </p>

                <button
                  type="button"
                  disabled
                  className="mt-5 w-full cursor-not-allowed rounded-full border border-[#DBC18D] px-5 py-2.5 text-sm font-semibold text-[#8A7A74]"
                >
                  Audio / Video Coming Soon
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Copyright / Permission Note */}
        <div className="mt-10 rounded-[18px] border border-[#DBC18D] bg-[#F0EDED] p-5 text-center">
          <p className="text-sm leading-6 text-[#5A413D]">
            We publish songs and recordings only when we have the necessary
            ownership, authorization or permission to use them.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeaturedSongsSection;