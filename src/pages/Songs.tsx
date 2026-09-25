import SongsHeroSection from "../components/songs/SongsHeroSection";
import SongCategoriesSection from "../components/songs/SongCategoriesSection";
import FeaturedSongsSection from "../components/songs/FeaturedSongsSection";

function Songs() {
  return (
    <div className="bg-[#FDFBF7]">
      <SongsHeroSection />
      <SongCategoriesSection />
      <FeaturedSongsSection />
    </div>
  );
}

export default Songs;