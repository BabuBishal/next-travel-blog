"use client";
import Image from "next/image";
import Link from "next/link";
import Tag from "../ui/Tag";
import { urlFor } from "@/sanity/lib/image";
import { formatDate } from "@/lib/utils";
import PortableTextRenderer from "./PortableTextRenderer";

const BlogCard = ({ post }) => {
  const fallbackImage = "/fallback-img.png";
  const fallbackImageAlt = "image for blog";

  const imageUrl = post?.mainImage
    ? urlFor(post.mainImage).url()
    : fallbackImage;
  const imageAlt = post?.mainImage ? post.mainImage?.alt : fallbackImageAlt;
  const authorName = post?.author?.name || "Anonymous";
  const publishedDate = formatDate(post?.publishedAt);
  return (
    <article className="flex flex-col sm:h-[300px] sm:flex-row gap-3 sm:gap-8 bg-cyan-50 shadow-lg rounded-lg p-5">
      <Image
        src={imageUrl}
        width={540}
        height={400}
        alt={imageAlt}
        className="w-80 h-64 object-cover rounded-lg"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <div className="flex flex-col h-full gap-1 text-slate-600">
        <h3 className=" text-xl font-bold max-h-14 overflow-hidden">
          {post?.title}
        </h3>
        <div className="  flex gap-2 md:gap-5 flex-wrap">
          {post?.categories?.map(({ title, _id }) => (
            <Tag key={_id + title} text={title} />
          ))}
        </div>
        <div className="flex flex-col gap-2 justify-start items-start">
          <div className="flex gap-8 justify-start mt-2 items-center">
            <span className="font-normal">By: {authorName}</span>
            <span className="font-normal text-sm ">Date: {publishedDate}</span>
          </div>
        </div>
        <div className="font-normal h-full max-h-32  flex-1 mt-3 text-lg overflow-hidden text-balance overflow-ellipsis">
          <PortableTextRenderer value={post?.post} />
        </div>

        <Link
          href={{
            pathname: `/blogs/${post?.slug?.current}`,
            query: { id: post?._id },
          }}
          className="text-teal-500 w-32 justify-end font-semibold hover:bg-slate-200 teansition-colors duration-200  px-5 py-2 bg-slate-100 rounded-lg shadow-md"
        >
          Read More
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
