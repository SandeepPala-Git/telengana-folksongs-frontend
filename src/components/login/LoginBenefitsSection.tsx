import { Headphones, Heart, Music2, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Music2,
    title: "Discover Folk Music",
    description:
      "Explore Telangana folk songs, traditions and cultural music.",
  },
  {
    icon: Headphones,
    title: "Enjoy Your Content",
    description:
      "Access songs, videos and other content available to your account.",
  },
  {
    icon: Heart,
    title: "Follow Artists",
    description:
      "Discover and follow folk artists, singers and cultural performers.",
  },
  {
    icon: Sparkles,
    title: "Exclusive Experience",
    description:
      "Enjoy additional content and features available for registered members.",
  },
];

function LoginBenefitsSection() {
  return (
    <section className="bg-[#FDFBF7] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#775A19]">
            Join Our Community
          </p>

          <h2 className="mt-3 font-serif text-3xl font-bold text-[#570000] md:text-4xl">
            More Than Just Folk Songs
          </h2>

          <p className="mt-4 text-base leading-7 text-[#5A413D]">
            Create an account and become part of a growing community that
            celebrates Telangana folk music, artists and culture.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="rounded-[24px] border border-[#DBC18D] bg-white p-6 shadow-[0_8px_24px_rgba(90,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F0EDED] text-[#570000]">
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 font-serif text-xl font-semibold text-[#570000]">
                  {benefit.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#5A413D]">
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

export default LoginBenefitsSection;