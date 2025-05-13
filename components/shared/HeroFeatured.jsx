import { urlFor } from "@/sanity/lib/image";
import React from "react";
import Overlay from "../ui/Overlay";
import Link from "next/link";

const HeroFeatured = ({ post }) => {
  const imageUrl = post?.mainImage
    ? urlFor(post.mainImage).url()
    : "/fallback-img.png";

  const imageAlt = post?.mainImage
    ? post.mainImage?.alt
    : `hero featured image`;
  return (
    <article className="relative w-screen flex flex-col items-center gap-5 mb-5 text-center  ">
      <Link
        href={{ pathname: `/blogs/${post?.title}`, query: post?._id }}
        className="w-full h-full "
      >
        <div className="relative w-full max-h-[700px] overflow-hidden">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover origin-center"
          />
          <Overlay />
          <div className="absolute bottom-8 w-full  flex gap-2 md:gap-5  justify-center">
            {post?.categories?.map((tag) => (
              <span key={tag?._id} className="text-white text-lg">
                {tag?.title}
              </span>
            ))}
            <h2 className="absolute  bottom-12 font-bold text-white text-2xl md:text-4xl">
              {post?.title}
            </h2>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default HeroFeatured;
