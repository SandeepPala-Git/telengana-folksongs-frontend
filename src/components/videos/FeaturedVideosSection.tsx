const featuredVideos = [
  {
    title: "Traditional Telangana Folk Performance",
    category: "Folk Performance",
    duration: "04:32",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC_fZxJpPuHtSqNe_vtsJObkTycRDe3PxUNZ7FEhOrrsjdynWjAF3PiZMxFfg14Hf2pvzleEuEBiuTf3ZOxH_4EUDS2pFbpvrdYIE4UzDi3edTAZE4SVBdRKTvpKnXi2sy84J21sP2qQit2eMhYC7N5yuMknMk7y6Uy_wXgQFZQFh74S-rEQBwp7iznHnabLLDjDdzD0LRCUOSzSVAkQ0xaq3q2lZJq-IHTpaipmEpJhK_bDzJ-6RCdKA",
  },
  {
    title: "Bonalu Festival Folk Celebration",
    category: "Festivals",
    duration: "06:18",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBX55PP_GxNR_LjUu2o-W2hvtZoWFxxRw7msrX7RkrDqR7yERorAtD9Fs13volZjRcuaIV7jl7OmAS3CIhgfPQi1ymrka29XDc2ttwkBh9o2bd5CL2XBL-F8spCV1BH4EdXAww8C05rnZpZXZ0FlNV5gRJMs3TdtcBg01J-yYY2lRlQAZg6KJZvq-HDTXi7XXdqhQz9KqRAN5F467HsXMQ9dHfyqg3SVU1oMLsjaljQXn4UcoDBrlUWSw",
  },
  {
    title: "Telangana Folk Artist Performance",
    category: "Artists",
    duration: "05:45",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDmaSBDTdYCYHfmovNBVE0QX-5s1a4ffRGhJPlHHUqeXEUssTgTXbPXxUyQEb-foR8eIU04EMpW76D4UANLFLAJtOkQJPIy4OlToP4aw3afJKLfE3xSdKuER0i2AZEO-RUK8dVVOYSKd34zcrukPU9c6VLdAb6rGYiLDtoqhyHxZp66lK7EFiCbxTggE9ICAP9Sg6bDEfsRPegvBCSxg8G-USixvwjff5bqwfOSimjr9w_x9osaCR9mPA",
  },
];

function FeaturedVideosSection() {
  return (
    <section className="bg-[#F0EDED] py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-16">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-[#570000] md:text-4xl">
            Featured Videos
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5A413D]">
            Watch selected performances, celebrations and stories from
            Telangana folk culture.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {featuredVideos.map((video) => (
            <article
              key={video.title}
              className="group overflow-hidden rounded-[24px] border border-[#DBC18D] bg-[#FDFBF7] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.image}
                  alt={video.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/30">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-[#570000] shadow-lg transition duration-300 group-hover:scale-110">
                    <span className="ml-1 text-xl">▶</span>
                  </div>
                </div>

                {/* Duration */}
                <span className="absolute bottom-3 right-3 rounded-md bg-black/75 px-2 py-1 text-xs font-medium text-white">
                  {video.duration}
                </span>
              </div>

              {/* Video Information */}
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#775A19]">
                  {video.category}
                </p>

                <h3 className="mt-3 font-serif text-xl font-semibold leading-7 text-[#570000]">
                  {video.title}
                </h3>

                <button
                  type="button"
                  className="mt-5 text-sm font-semibold text-[#570000] transition hover:text-[#775A19]"
                >
                  Watch Video →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedVideosSection;