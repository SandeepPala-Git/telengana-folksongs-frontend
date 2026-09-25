const videoCategories = [
  {
    name: "Folk Performances",
    description:
      "Watch traditional Telangana folk singing, dancing and live performances.",
  },
  {
    name: "Festivals",
    description:
      "Experience the music, celebrations and traditions of Telangana festivals.",
  },
  {
    name: "Artist Stories",
    description:
      "Discover the journeys, performances and stories of Telangana folk artists.",
  },
  {
    name: "Culture & Traditions",
    description:
      "Explore videos showcasing the heritage, customs and everyday culture of Telangana.",
  },
];

function VideoCategoriesSection() {
  return (
    <section className="bg-[#FDFBF7] py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-16">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-[#570000] md:text-4xl">
            Explore Video Categories
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5A413D]">
            Find videos based on performances, festivals, artists and
            Telangana cultural traditions.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {videoCategories.map((category) => (
            <div
              key={category.name}
              className="rounded-[24px] border border-[#DBC18D] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F0EDED] text-xl text-[#570000]">
                ▶
              </div>

              <h3 className="mt-5 font-serif text-xl font-semibold text-[#570000]">
                {category.name}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#5A413D]">
                {category.description}
              </p>

              <button
                type="button"
                className="mt-5 text-sm font-semibold text-[#570000] transition hover:text-[#775A19]"
              >
                Explore →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoCategoriesSection;