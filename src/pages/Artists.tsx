import ArtistsHeroSection from "../components/artists/ArtistsHeroSection";
import FeaturedArtistsSection from "../components/artists/FeaturedArtistsSection";
import ArtistCategoriesSection from "../components/artists/ArtistCategoriesSection";

function Artists() {
  return (
    <div className="bg-[#FDFBF7] text-[#1C1B1B]">
      <ArtistsHeroSection />
      <FeaturedArtistsSection />
      <ArtistCategoriesSection />
    </div>
  );
}

export default Artists;