import { Check } from "lucide-react";

const plans = [
  {
    name: "Monthly",
    description: "Flexible access for listeners who want to enjoy premium folk music.",
    price: "₹___",
    period: "/ month",
    popular: false,
    features: [
      "Access to complete songs",
      "Premium folk music content",
      "Exclusive performances",
      "Ad-free listening experience",
    ],
  },
  {
    name: "Yearly",
    description: "Enjoy Telangana folk culture throughout the year with one simple plan.",
    price: "₹___",
    period: "/ year",
    popular: true,
    features: [
      "Everything in Monthly",
      "Complete premium song collection",
      "Exclusive artist content",
      "Premium videos and performances",
      "Priority access to new content",
    ],
  },
];

function SubscriptionPlansSection() {
  return (
    <section className="bg-white px-5 py-16 md:px-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#775A19]">
            Choose Your Plan
          </p>

          <h2 className="font-serif text-3xl font-bold text-[#570000] md:text-4xl">
            Unlock the Full Folk Music Experience
          </h2>

          <p className="mt-4 text-base leading-7 text-[#5A413D]">
            Choose a subscription plan and enjoy complete songs, premium
            performances and exclusive Telangana folk content.
          </p>
        </div>

        {/* Plans */}
        <div className="grid gap-8 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-[24px] border p-8 ${
                plan.popular
                  ? "border-[#DBC18D] bg-[#FDFBF7] shadow-lg"
                  : "border-[#E7DED8] bg-white"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute right-6 top-6 rounded-full bg-[#570000] px-4 py-1.5 text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}

              <div className="pr-24">
                <h3 className="font-serif text-2xl font-bold text-[#570000]">
                  {plan.name}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#5A413D]">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mt-6 flex items-end gap-2">
                <span className="font-serif text-4xl font-bold text-[#570000]">
                  {plan.price}
                </span>

                <span className="mb-1 text-sm text-[#775A19]">
                  {plan.period}
                </span>
              </div>

              {/* Divider */}
              <div className="my-7 h-px bg-[#E7DED8]" />

              {/* Features */}
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-[#4A3935]"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F3E8D0]">
                      <Check
                        size={13}
                        strokeWidth={2.5}
                        className="text-[#775A19]"
                      />
                    </span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                type="button"
                className={`mt-8 w-full rounded-full px-6 py-3.5 text-sm font-semibold transition ${
                  plan.popular
                    ? "bg-[#570000] text-white hover:bg-[#5A0000]"
                    : "border border-[#570000] text-[#570000] hover:bg-[#570000] hover:text-white"
                }`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-8 text-center text-xs leading-5 text-[#775A19]">
          Subscription and payment processing will be connected to the
          website backend later.
        </p>
      </div>
    </section>
  );
}

export default SubscriptionPlansSection;