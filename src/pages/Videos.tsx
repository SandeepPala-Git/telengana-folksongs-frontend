import VideosHeroSection from "../components/videos/VideosHeroSection";
import FeaturedVideosSection from "../components/videos/FeaturedVideosSection";
import VideoCategoriesSection from "../components/videos/VideoCategoriesSection";

function Videos() {
  return (
    <div className="bg-[#FDFBF7] text-[#1C1B1B]">
      <VideosHeroSection />
      <FeaturedVideosSection />
      <VideoCategoriesSection />
    </div>
  );
}

export default Videos;