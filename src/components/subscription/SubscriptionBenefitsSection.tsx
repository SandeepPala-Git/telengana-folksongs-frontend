import {
  Headphones,
  Music,
  Sparkles,
  Video,
} from "lucide-react";

const benefits = [
  {
    icon: Music,
    title: "Complete Folk Songs",
    description:
      "Enjoy full-length songs and discover more of Telangana's rich folk music tradition.",
  },
  {
    icon: Video,
    title: "Exclusive Performances",
    description:
      "Watch premium performances and cultural videos from participating artists.",
  },
  {
    icon: Headphones,
    title: "Premium Listening",
    description:
      "Enjoy a better listening experience with access to subscriber-only content.",
  },
  {
    icon: Sparkles,
    title: "New Cultural Content",
    description:
      "Discover newly added songs, performances, artist stories and other cultural content.",
  },
];

function SubscriptionBenefitsSection() {
  return (
    <section className="bg-[#F0EDED] px-5 py-16 md:px-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#775A19]">
            Membership Benefits
          </p>

          <h2 className="font-serif text-3xl font-bold text-[#570000] md:text-4xl">
            More Than Just Music
          </h2>

          <p className="mt-4 text-base leading-7 text-[#5A413D]">
            Your subscription helps support the preservation and presentation
            of Telangana folk culture while giving you access to premium
            content.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="rounded-[24px] border border-[#E1D8D2] bg-white p-7 text-center transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Icon */}
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F3E8D0]">
                  <Icon
                    size={25}
                    strokeWidth={1.8}
                    className="text-[#775A19]"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-6 font-serif text-xl font-bold text-[#570000]">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-[#5A413D]">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SubscriptionBenefitsSection;