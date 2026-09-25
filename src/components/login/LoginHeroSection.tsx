import { Music2 } from "lucide-react";

function LoginHeroSection() {
  return (
    <section className="border-b border-[#DBC18D]/50 bg-[#FDFBF7]">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-16 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          {/* Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#570000] text-white shadow-sm">
            <Music2 size={30} strokeWidth={1.8} />
          </div>

          {/* Heading */}
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.15em] text-[#775A19]">
            Welcome Back
          </p>

          <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-[#570000] md:text-5xl">
            Sign in to Telangana Folk Songs
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-8xl text-base leading-7 text-[#5A413D] md:text-lg">
            Sign in to explore Telangana folk music, artists, videos,
            cultural stories and your personalized content.
          </p>
        </div>
      </div>
    </section>
  );
}

export default LoginHeroSection;