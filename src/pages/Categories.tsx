import { Link } from "react-router-dom";

const categories = [
  {
    name: "Bonalu",
    slug: "bonalu",
    description: "Traditional songs and cultural expressions associated with Bonalu.",
    icon: "🌺",
  },
  {
    name: "Bathukamma",
    slug: "bathukamma",
    description: "Folk traditions, songs and celebrations surrounding Bathukamma.",
    icon: "🌸",
  },
  {
    name: "Dussehra",
    slug: "dussehra",
    description: "Traditional folk performances and celebrations connected with Dussehra.",
    icon: "🪔",
  },
  {
    name: "Marriage",
    slug: "marriage",
    description: "Traditional wedding songs, customs and folk celebrations.",
    icon: "💐",
  },
  {
    name: "Devotional",
    slug: "devotional",
    description: "Devotional folk traditions and spiritual songs from Telangana.",
    icon: "🙏",
  },
  {
    name: "Traditional",
    slug: "traditional",
    description: "Classic Telangana folk traditions and storytelling.",
    icon: "🎶",
  },
  {
    name: "Village",
    slug: "village",
    description: "Folk traditions inspired by everyday village life and communities.",
    icon: "🌾",
  },
  {
    name: "Festival",
    slug: "festival",
    description: "Folk music and traditions connected with Telangana festivals.",
    icon: "🎉",
  },
];

function Categories() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1C1B1B]">
      {/* Page Header */}
      <section className="border-b border-[#DBC18D]/60 bg-[#F0EDED]">
        <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#775A19]">
            Explore Telangana Heritage
          </p>

          <h1 className="mt-3 font-serif text-4xl font-bold text-[#570000] md:text-5xl">
            Folk Categories
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#5A413D] md:text-lg">
            Explore Telangana folk traditions through festivals,
            celebrations, devotional practices, village life and
            traditional storytelling.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-5 md:px-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/categories/${category.slug}`}
                className="group rounded-[24px] border border-[#DBC18D] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F0EDED] text-2xl">
                  {category.icon}
                </div>

                <h2 className="mt-6 font-serif text-2xl font-semibold text-[#570000]">
                  {category.name}
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#5A413D]">
                  {category.description}
                </p>

                <div className="mt-6 text-sm font-semibold text-[#570000] transition group-hover:translate-x-1">
                  Explore Category →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Categories;