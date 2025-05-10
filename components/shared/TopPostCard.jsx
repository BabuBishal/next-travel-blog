import Image from "next/image";
import Link from "next/link";
import React from "react";
import Overlay from "../ui/Overlay";
import Tag from "../ui/Tag";

const TopPostCard = ({ post }) => {
  return (
    <Link
      href={{ pathname: `/blogs/${post.id}`, query: { ...post } }}
      className="shadow-md p-2 "
    >
      <article className="rounded-sm">
        <div className="relative cursor-pointer ">
          <Image
            src={post.image}
            width={800}
            height={800}
            alt={`Image for ${post.title}`}
            loading="lazy"
          />
          <Overlay />
        </div>
        <div className="  flex gap-2 md:gap-5 items-center ">
          {post.tags.map((tag, id) => (
            <Tag key={id} text={tag} />
          ))}
        </div>
        <h3 className=" text-xl font-bold">{post.title}</h3>
        <div className="flex gap-4 justify-between mt-2 text-tertiary">
          <span className="font-normal italic">By: {post.author}</span>
          <span className="font-normal italic"> {post.date}</span>
        </div>
      </article>
    </Link>
  );
};

export default TopPostCard;
