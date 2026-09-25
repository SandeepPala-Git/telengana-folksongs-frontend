import { Mic2, Music2, Sparkles, UsersRound } from "lucide-react";

const artistCategories = [
  {
    name: "Folk Singers",
    description: "Singers who bring Telangana folk songs and stories to life.",
    icon: Mic2,
  },
  {
    name: "Folk Performers",
    description: "Artists who preserve traditional performance styles and expressions.",
    icon: UsersRound,
  },
  {
    name: "Musicians",
    description: "Musicians who contribute traditional sounds and instruments.",
    icon: Music2,
  },
  {
    name: "Cultural Artists",
    description: "Artists involved in preserving Telangana's cultural heritage.",
    icon: Sparkles,
  },
];

function ArtistCategoriesSection() {
  return (
    <section className="bg-[#FDFBF7] py-160 md:py-20">
      <div className="mx-auto max-w-[1280px] px-5 md:px-16">
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#775A19]">
            Explore Our Community
          </p>

          <h2 className="font-serif text-3xl font-bold text-[#570000] md:text-4xl">
            Discover Artists by Type
          </h2>

          <p className="mx-auto mt-4 text-sm leading-7 text-[#5A413D]">
            Explore different types of artists who contribute to
            Telangana folk music and cultural traditions.
          </p>
        </div>

        {/* Artist Categories */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {artistCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.name}
                className="group rounded-[20px] border border-[#DBC18D] bg-[#F0EDED] p-6 text-center transition duration-300 hover:-translate-y-1 hover:bg-[#FDFBF7] hover:shadow-[0_10px_30px_rgba(87,0,0,0.06)]"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#570000] text-white transition duration-300 group-hover:scale-105">
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 font-serif text-xl font-semibold text-[#570000]">
                  {category.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#5A413D]">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ArtistCategoriesSection;