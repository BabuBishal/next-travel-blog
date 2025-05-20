import React from "react";
import Tag from "../ui/Tag";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Overlay from "../ui/Overlay";

const FeaturedPostCard = ({ post }) => {
  const imageUrl = post?.mainImage
    ? urlFor(post.mainImage).url()
    : "/fallback-img.png";

  const imageAlt = post?.mainImage ? post.mainImage?.alt : `image for blog`;
  return (
    <article className="flex flex-col gap-3 items-center text-center relative">
      <Link href={{ pathname: `/blogs/${post?.title}`, query: post?._id }}>
        <div className="relative overflow-hidden h-72 shadow-xl ">
          <img src={imageUrl} alt={imageAlt} className="object-cover " />
          <Overlay />
        </div>
      </Link>
      <div className="  flex gap-2 md:gap-5 items-center justify-center">
        {post?.categories?.map(({ title, _id }) => (
          <Tag key={_id} text={title} />
        ))}
      </div>
      <h3 className="px-5 text-xl">{post?.title}</h3>
      <span className="font-light italic">{post?.publishedAt}</span>
    </article>
  );
};

export default FeaturedPostCard;
