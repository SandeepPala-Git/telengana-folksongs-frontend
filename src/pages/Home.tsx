import HeroSection from "../components/home/HeroSection";
import CategoriesSection from "../components/home/CategoriesSection";
import CultureSection from "../components/home/CultureSection";

function Home() {
  return (
    <div className="bg-[#FDFBF7] text-[#1C1B1B]">
      <HeroSection />
      <CategoriesSection />
      <CultureSection />
    </div>
  );
}

export default Home;