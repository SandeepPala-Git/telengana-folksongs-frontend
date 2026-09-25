import BlogsHeroSection from "../components/blogs/BlogsHeroSection";
import FeaturedBlogsSection from "../components/blogs/FeaturedBlogsSection";
import BlogCategoriesSection from "../components/blogs/BlogCategoriesSection";

function Blogs() {
  return (
    <div className="bg-[#FDFBF7] text-[#1C1B1B]">
      <BlogsHeroSection />
      <FeaturedBlogsSection />
      <BlogCategoriesSection />
    </div>
  );
}

export default Blogs;