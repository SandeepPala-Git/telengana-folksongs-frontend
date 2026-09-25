function CultureSection() {
  return (
    <section className="bg-[#FDFBF7] py-20">
      <div className="mx-auto max-w-[1280px] px-5 md:px-16">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#775A19]">
            Our Heritage
          </p>

          <h2 className="mt-3 font-serif text-3xl font-bold text-[#570000] md:text-4xl">
            The Culture Behind the Songs
          </h2>

          <p className="mt-5 text-base leading-7 text-[#5A413D] md:text-lg">
            Telangana folk music carries the stories, traditions and
            celebrations of villages and communities across the region.
          </p>
        </div>

        {/* Culture Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {/* Festivals */}
          <div className="rounded-[24px] border border-[#DBC18D] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F0EDED] text-2xl">
              🌸
            </div>

            <h3 className="mt-5 font-serif text-xl font-semibold text-[#570000]">
              Festivals
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#5A413D]">
              Folk songs are deeply connected with festivals such as
              Bathukamma, Bonalu and other traditional celebrations.
            </p>
          </div>

          {/* Village Life */}
          <div className="rounded-[24px] border border-[#DBC18D] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F0EDED] text-2xl">
              🌾
            </div>

            <h3 className="mt-5 font-serif text-xl font-semibold text-[#570000]">
              Village Life
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#5A413D]">
              Many folk songs reflect everyday life, relationships,
              occupations, celebrations and stories from Telangana villages.
            </p>
          </div>

          {/* Dance & Performance */}
          <div className="rounded-[24px] border border-[#DBC18D] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F0EDED] text-2xl">
              🥁
            </div>

            <h3 className="mt-5 font-serif text-xl font-semibold text-[#570000]">
              Dance & Performance
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#5A413D]">
              Music, rhythm and traditional performances come together
              to preserve the living heritage of Telangana folk culture.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CultureSection;