const featuredBlogs = [
  {
    title: "The Living Tradition of Telangana Folk Music",
    category: "Culture",
    description:
      "Discover how Telangana folk music carries stories, traditions and emotions from one generation to the next.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC_fZxJpPuHtSqNe_vtsJObkTycRDe3PxUNZ7FEhOrrsjdynWjAF3PiZMxFfg14Hf2pvzleEuEBiuTf3ZOxH_4EUDS2pFbpvrdYIE4UzDi3edTAZE4SVBdRKTvpKnXi2sy84J21sP2qQit2eMhYC7N5yuMknMk7y6Uy_wXgQFZQFh74S-rEQBwp7iznHnabLLDjDdzD0LRCUOSzSVAkQ0xaq3q2lZJq-IHTpaipmEpJhK_bDzJ-6RCdKA",
  },
  {
    title: "Bonalu: Music, Devotion and Community",
    category: "Festivals",
    description:
      "Learn about the musical traditions surrounding Bonalu and the important role folk performers play in the celebrations.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBX55PP_GxNR_LjUu2o-W2hvtZoWFxxRw7msrX7RkrDqR7yERorAtD9Fs13volZjRcuaIV7jl7OmAS3CIhgfPQi1ymrka29XDc2ttwkBh9o2bd5CL2XBL-F8spCV1BH4EdXAww8C05rnZpZXZ0FlNV5gRJMs3TdtcBg01J-yYY2lRlQAZg6KJZvq-HDTXi7XXdqhQz9KqRAN5F467HsXMQ9dHfyqg3SVU1oMLsjaljQXn4UcoDBrlUWSw",
  },
  {
    title: "The Voices Behind Telangana Folk Songs",
    category: "Artists",
    description:
      "Meet the singers, performers and artists who help preserve Telangana's unique folk traditions.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDmaSBDTdYCYHfmovNBVE0QX-5s1a4ffRGhJPlHHUqeXEUssTgTXbPXxUyQEb-foR8eIU04EMpW76D4UANLFLAJtOkQJPIy4OlToP4aw3afJKLfE3xSdKuER0i2AZEO-RUK8dVVOYSKd34zcrukPU9c6VLdAb6rGYiLDtoqhyHxZp66lK7EFiCbxTggE9ICAP9Sg6bDEfsRPegvBCSxg8G-USixvwjff5bqwfOSimjr9w_x9osaCR9mPA",
  },
];

function FeaturedBlogsSection() {
  return (
    <section className="bg-[#F0EDED] py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-16">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-[#570000] md:text-4xl">
            Featured Stories
          </h2>

          <p className="mx-auto mt-4 max-w-8xl text-base leading-7 text-[#5A413D]">
            Read stories about Telangana folk music, artists, festivals
            and cultural traditions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {featuredBlogs.map((blog) => (
            <article
              key={blog.title}
              className="group overflow-hidden rounded-[24px] border border-[#DBC18D] bg-[#FDFBF7] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#775A19]">
                  {blog.category}
                </p>

                <h3 className="mt-3 font-serif text-xl font-semibold leading-7 text-[#570000]">
                  {blog.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#5A413D]">
                  {blog.description}
                </p>

                <button
                  type="button"
                  className="mt-5 text-sm font-semibold text-[#570000] transition hover:text-[#775A19]"
                >
                  Read Story →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedBlogsSection;