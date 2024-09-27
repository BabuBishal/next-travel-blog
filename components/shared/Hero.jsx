import blogData from "@/constants/blogData";

import Tag from "../ui/Tag";
import Overlay from "../ui/Overlay";
import Link from "next/link";

const Hero = () => {
  const featuredPost = blogData?.filter((blog) => blog.featured === true);
  const topFeatured = featuredPost?.slice(0, 1);
  const remainingFeatured = featuredPost?.slice(1, 5);

  return (
    <section className="relative ">
      <div className="w-full  z-1 flex flex-col align-center justify-center">
        {topFeatured?.map((post, id) => (
          <article
            key={id}
            className="w-full flex flex-col items-center gap-5 mb-5 text-center relative "
          >
            <div className="relative max-h-[700px] overflow-hidden">
              <img
                src={post.image}
                alt={`image for ${post.title}`}
                className="w-full h-full object-cover"
              />
              <Overlay />
              <div className="absolute bottom-5 left-20 md:left-[42%] flex gap-2 md:gap-5 items-center justify-center">
                {post.tags.map((tag, id) => (
                  <span className="text-white text-xl">{tag}</span>
                ))}
              </div>
            </div>
            {/* <h2 className="font-bold text-2xl px-10">{post.title}</h2>
            <div className="md:w-[60%] text-justify px-10">{post.description}</div>
            <div className="flex items-center gap-3  text-primary font-normal justify-center">
              <div className="w-10 h-10 rounded-full bg-black"></div>
              <h4>{post.author}</h4>
              <span className="italic">{post.date}</span>
            </div> */}
          </article>
        ))}
        <div className="md:w-[60%] w-full mt-5 mb-5 md:my-10  mx-5 md:mx-auto font-bold">
          <h1 className="text-3xl md:text-5xl my-5">Featured Posts</h1>
          <div
            className="  grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center  "
            
          >
            {remainingFeatured.map((post, id) => (
              <div className="relative overflow-hidden h-72 shadow-xl ">
                <img src={post.image} alt="" className="object-cover w-full h-full" />
                <Overlay />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
