import Image from "next/image";
import Link from "next/link";
import React from "react";
import Overlay from "../ui/Overlay";
import Tag from "../ui/Tag";
import { formatDate } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";

const TopPostCard = ({ post }) => {
  const imageUrl = post?.mainImage
    ? urlFor(post.mainImage).url()
    : "/fallback-img.png";
  const imageAlt = post?.mainImage ? post.mainImage?.alt : `image for blog`;
  const authorName = post?.author?.name;
  const publishedDate = formatDate(post?.publishedAt);

  return (
    <Link
      href={{ pathname: `/blogs/${post?.title}`, query: { id: post?._id } }}
      className="hover:shadow-md p-2 duration-200 "
    >
      <article className="rounded-sm">
        <div className="relative cursor-pointer ">
          <Image src={imageUrl} width={800} height={800} alt={imageAlt} />
          <Overlay />
        </div>
        <div className="  flex gap-2 md:gap-5 items-center ">
          {post?.categories?.map(({ _id, title }) => (
            <Tag key={_id} text={title} />
          ))}
        </div>
        <h3 className=" text-lg font-bold">{post?.title}</h3>
        <div className="flex gap-4 justify-between mt-2 text-tertiary">
          <span className="font-normal text-sm italic">By: {authorName}</span>
          <span className="font-normal text-sm italic"> {publishedDate}</span>
        </div>
      </article>
    </Link>
  );
};

export default TopPostCard;
