import { Link } from "react-router-dom";

const songCategories = [
  {
    name: "Bonalu",
    description: "Traditional songs connected with Bonalu celebrations.",
  },
  {
    name: "Bathukamma",
    description: "Folk songs celebrating Telangana's floral festival.",
  },
  {
    name: "Dussehra",
    description: "Traditional songs performed during Dussehra celebrations.",
  },
  {
    name: "Marriage",
    description: "Folk songs and melodies associated with weddings.",
  },
  {
    name: "Devotional",
    description: "Devotional and spiritual folk music.",
  },
  {
    name: "Traditional",
    description: "Classic Telangana folk songs and storytelling traditions.",
  },
];

function SongCategoriesSection() {
  return (
    <section className="bg-[#F0EDED] py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-5 md:px-16">
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#775A19]">
            Discover by tradition
          </p>

          <h2 className="font-serif text-3xl font-bold text-[#570000] md:text-4xl">
            Browse Song Categories
          </h2>

          <p className="mx-auto mt-4 text-sm leading-7 text-[#5A413D]">
            Explore Telangana folk music through different festivals,
            traditions and cultural occasions.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {songCategories.map((category) => (
            <Link
              key={category.name}
              to="/categories"
              className="group rounded-[20px] border border-[#DBC18D] bg-[#FDFBF7] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(87,0,0,0.08)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#570000] text-lg font-bold text-white">
                {category.name.charAt(0)}
              </div>

              <h3 className="font-serif text-xl font-semibold text-[#570000] transition group-hover:text-[#775A19]">
                {category.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#5A413D]">
                {category.description}
              </p>

              <div className="mt-5 text-sm font-semibold text-[#775A19]">
                Explore category →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SongCategoriesSection;