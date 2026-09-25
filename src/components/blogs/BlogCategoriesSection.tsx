const blogCategories = [
  {
    name: "Folk Music",
    description: "Stories, history and traditions behind Telangana folk music.",
  },
  {
    name: "Artists",
    description: "Stories and journeys of Telangana folk singers and performers.",
  },
  {
    name: "Festivals",
    description: "Explore the music and traditions connected with Telangana festivals.",
  },
  {
    name: "Culture & Traditions",
    description: "Discover the customs, stories and heritage of Telangana villages.",
  },
];

function BlogCategoriesSection() {
  return (
    <section className="bg-[#FDFBF7] py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-16">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-[#570000] md:text-4xl">
            Explore Blog Categories
          </h2>

          <p className="mx-auto mt-4 max-w-8xl text-base leading-12 text-[#5A413D]">
            Browse stories based on the topics and traditions you want to discover.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogCategories.map((category) => (
            <div
              key={category.name}
              className="rounded-3xl border border-[#DBC18D] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F0EDED] text-xl text-[#570000]">
                ✦
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

export default BlogCategoriesSection;