import { client } from "@/sanity/lib/client";
import FeaturedPostCard from "./FeaturedPostCard";
import HeroFeatured from "./HeroFeatured";
import { featuredPostsQuery } from "@/lib/queries";
// import BlogCard from "./BlogCard";

const Hero = async () => {
  const featured = await client.fetch(featuredPostsQuery);

  const topFeatured = featured?.posts?.slice(0, 1);
  const remainingFeatured = featured?.posts?.slice(1, 5);

  return (
    <section className="relative ">
      <div className="w-full  z-1 flex flex-col align-center justify-center">
        <HeroFeatured post={topFeatured} />
        <div className="lg:w-[60%] w-full mt-5 mb-5 md:my-10 md:mx-auto font-bold">
          <h1 className="text-3xl md:text-5xl my-5 mx-5">Featured Posts</h1>
          <div className="  grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center mx-5 ">
            {remainingFeatured?.posts?.map((post) => (
              <FeaturedPostCard post={post} key={post._id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
