import blogData from "@/constants/blogData";

import Tag from "../ui/Tag";
import Overlay from "../ui/Overlay";
import Link from "next/link";
import BlogCard from "./BlogCard";

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
            <Link href={{ pathname: `/blogs/${post.id}`, query: { ...post } }}>
              <div className="relative max-h-[700px] overflow-hidden">
                <img
                  src={post.image}
                  alt={`image for ${post.title}`}
                  className="w-full h-full object-cover"
                />
                <Overlay />
                <div className="absolute bottom-8 w-full  flex gap-2 md:gap-5  justify-center">
                  {post.tags.map((tag, id) => (
                    <span key={id} className="text-white text-lg">
                      {tag}
                    </span>
                  ))}
                  <h2 className="absolute  bottom-12 font-bold text-white text-2xl md:text-4xl">
                    {post.title}
                  </h2>
                </div>
              </div>
            </Link>
          </article>
        ))}
        <div className="lg:w-[60%] w-full mt-5 mb-5 md:my-10 md:mx-auto font-bold">
          <h1 className="text-3xl md:text-5xl my-5 mx-5">Featured Posts</h1>
          <div className="  grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center mx-5 ">
            {remainingFeatured.map((post, id) => (
              <article
                key={id}
                className="flex flex-col gap-3 items-center text-center relative"
              >
                <Link
                  href={{ pathname: `/blogs/${post.id}`, query: { ...post } }}
                >
                  <div className="relative overflow-hidden h-72 shadow-xl ">
                    <img
                      src={post.image}
                      alt={`image for ${post.title}`}
                      className="object-cover "
                    />
                    <Overlay />
                  </div>
                </Link>
                <div className="  flex gap-2 md:gap-5 items-center justify-center">
                  {post.tags.map((tag, id) => (
                    <Tag key={id} text={tag} />
                  ))}
                </div>
                <h3 className="px-5 text-xl">{post.title}</h3>
                <span className="font-light italic">{post.date}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
