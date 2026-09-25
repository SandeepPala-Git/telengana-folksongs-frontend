import SubscriptionHeroSection from "../components/subscription/SubscriptionHeroSection";
import SubscriptionPlansSection from "../components/subscription/SubscriptionPlansSection";
import SubscriptionBenefitsSection from "../components/subscription/SubscriptionBenefitsSection";
import SubscriptionFAQSection from "../components/subscription/SubscriptionFAQSection";

function Subscription() {
  return (
    <div className="bg-[#FDFBF7] text-[#1C1B1B]">
      <SubscriptionHeroSection />
      <SubscriptionPlansSection />
      <SubscriptionBenefitsSection />
      <SubscriptionFAQSection />
    </div>
  );
}

export default Subscription;