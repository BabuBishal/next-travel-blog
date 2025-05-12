"use client";
import Image from "next/image";
import Link from "next/link";
import Tag from "../ui/Tag";
import Overlay from "../ui/Overlay";
import { AiOutlineArrowRight } from "react-icons/ai";
import { urlFor } from "@/sanity/lib/image";

const BlogCard = ({ post }) => {
  const fallbackImage = "/fallback-img.png";
  const fallbackImageAlt = "image for blog";

  const imageUrl = post?.mainImage
    ? urlFor(post.mainImage).url()
    : fallbackImage;

  const imageAlt = post?.mainImage ? post.mainImage?.alt : fallbackImageAlt;
  return (
    <article className="relative rounded-lg overflow-hidden">
      <div className=" h-[450px] relative ">
        <Image
          src={imageUrl}
          width={800}
          height={450}
          priority
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={imageAlt}
          className="object-cover"
        />
        <Overlay />
      </div>
      <div className="absolute w-full h-full top-0 p-5 flex flex-col justify-start">
        <div className="  flex gap-2 md:gap-5 flex-wrap">
          {post?.categories?.map(({ title, _id }) => (
            <Tag key={_id} text={title} />
          ))}
        </div>
        <h3 className="text-3xl font-extrabold uppercase text-cyan-50  drop-shadow-lg">
          {post?.title}
        </h3>
      </div>
      <Link
        href={{
          pathname: `/blogs/${post?.slug?.current}`,
          query: { id: post?._id },
        }}
        className="absolute bottom-0 right-0 bg-cyan-400 hover:bg-cyan-500 p-5  text-white rounded-tl-lg z-6 duration-200 cursor-pointer"
      >
        <AiOutlineArrowRight size={30} />
      </Link>
    </article>
  );
};

export default BlogCard;
