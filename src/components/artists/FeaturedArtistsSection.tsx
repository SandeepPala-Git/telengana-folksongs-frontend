import { UserRound } from "lucide-react";

const featuredArtists = [
  {
    name: "Artist Profile",
    role: "Folk Singer",
    description:
      "Artist profile and authorized folk music will be added here.",
  },
  {
    name: "Artist Profile",
    role: "Folk Performer",
    description:
      "Discover the work and cultural contributions of Telangana folk performers.",
  },
  {
    name: "Artist Profile",
    role: "Folk Artist",
    description:
      "Artist information, songs and performances will appear here.",
  },
];

function FeaturedArtistsSection() {
  return (
    <section className="bg-[#F0EDED] py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-5 md:px-16">
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#775A19]">
            Our Folk Community
          </p>

          <h2 className="font-serif text-3xl font-bold text-[#570000] md:text-4xl">
            Featured Artists
          </h2>

          <p className="mx-auto mt-4 text-sm leading-7 text-[#5A413D]">
            Meet the singers and performers who share their talent,
            stories and traditions with the Telangana folk community.
          </p>
        </div>

        {/* Artist Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredArtists.map((artist, index) => (
            <article
              key={`${artist.name}-${index}`}
              className="group overflow-hidden rounded-[24px] border border-[#DBC18D] bg-[#FDFBF7] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(87,0,0,0.08)]"
            >
              {/* Artist Image Placeholder */}
              <div className="flex aspect-square items-center justify-center bg-[#E8E0D8]">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#DBC18D] bg-[#FDFBF7] text-[#570000] transition duration-300 group-hover:scale-105">
                  <UserRound size={46} strokeWidth={1.5} />
                </div>
              </div>

              {/* Artist Information */}
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#775A19]">
                  {artist.role}
                </p>

                <h3 className="mt-2 font-serif text-xl font-semibold text-[#570000]">
                  {artist.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#5A413D]">
                  {artist.description}
                </p>

                <button
                  type="button"
                  disabled
                  className="mt-5 w-full cursor-not-allowed rounded-full border border-[#DBC18D] px-5 py-2.5 text-sm font-semibold text-[#8A7A74]"
                >
                  Profile Coming Soon
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Permission Note */}
        <div className="mt-10 rounded-[18px] border border-[#DBC18D] bg-[#FDFBF7] p-5 text-center">
          <p className="text-sm leading-6 text-[#5A413D]">
            Artist profiles, photographs, songs and videos will be
            published with the artist's knowledge and appropriate
            permission.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeaturedArtistsSection;