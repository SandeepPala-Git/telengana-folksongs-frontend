import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What do I get with a subscription?",
    answer:
      "A subscription gives you access to premium content such as complete songs, exclusive performances, premium videos and other subscriber-only cultural content.",
  },
  {
    question: "Can I listen to songs without a subscription?",
    answer:
      "Yes. Free users can explore the website and listen to available previews or free content. Full premium content will require an active subscription.",
  },
  {
    question: "Will new songs and videos be added?",
    answer:
      "Yes. New authorized songs, performances, videos and cultural content can be added regularly as the platform grows.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Subscription cancellation and renewal options will be available once the subscription and payment system is connected to the website backend.",
  },
  {
    question: "How will payments work?",
    answer:
      "Online payment processing will be integrated with the website backend in a later stage. The current page is only the frontend subscription experience.",
  },
  {
    question: "Is all content available for subscription?",
    answer:
      "Only content that is owned, licensed or otherwise authorized for publication on the platform will be made available.",
  },
];

function SubscriptionFAQSection() {
  return (
    <section className="bg-[#FDFBF7] px-5 py-16 md:px-16 md:py-20">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#775A19]">
            Frequently Asked Questions
          </p>

          <h2 className="font-serif text-3xl font-bold text-[#570000] md:text-4xl">
            Questions About Membership?
          </h2>

          <p className="mt-4 text-base leading-7 text-[#5A413D]">
            Here are some common questions about subscriptions and premium
            content.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[20px] border border-[#E1D8D2] bg-white"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-left font-semibold text-[#570000] md:px-7">
                <span>{faq.question}</span>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F3E8D0]">
                  <ChevronDown
                    size={18}
                    className="text-[#775A19] transition-transform duration-300 group-open:rotate-180"
                  />
                </span>
              </summary>

              <div className="px-6 pb-6 text-sm leading-7 text-[#5A413D] md:px-7">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SubscriptionFAQSection;