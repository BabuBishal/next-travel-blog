import Tag from "@/components/ui/Tag";
import Image from "next/image";
// import BlogCard from "@/components/shared/BlogCard";
import { PortableText } from "@portabletext/react";

import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
// import blogData from "@/constants/blogData";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { formatDate } from "@/lib/utils";
import { blogPostByIdQuery } from "@/lib/queries";
import PortableTextRenderer from "@/components/shared/PortableTextRenderer";

const page = async ({ searchParams }) => {
  const { id } = searchParams;

  const postData = await client.fetch(blogPostByIdQuery, { id: id });

  const fallbackImage = "/fallback-img.png";
  const fallbackImageAlt = "image for blog";

  const imageUrl = postData.mainImage
    ? urlFor(postData.mainImage).url()
    : fallbackImage;

  const imageAlt = postData.mainImage
    ? postData.mainImage.alt
    : fallbackImageAlt;
  const formattedDate = formatDate(postData?.publishedAt);
  const authorName = postData.author.name;

  return (
    <article className="w-full max-md:px-5 my-5 lg:w-[60%] lg:mx-auto ">
      <section className="flex flex-col gap-5 items-center">
        <div>
          <div className="w-full  relative mb-5 overflow-hidden h-[600px]">
            <Image
              alt={imageAlt}
              src={imageUrl}
              width={1050}
              height={600}
              priority
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="h-full w-full object-cover"
            />
            {}
          </div>
          <div className="  flex gap-2 md:gap-5 flex-wrap">
            {postData.categories.map(({ title, _id }) => (
              <Tag key={_id} text={title} />
            ))}
          </div>
          <h1 className="text-4xl uppercase font-extrabold mt-3 prose lg:prose-2xl">
            {postData.title}
          </h1>
          {/* <div className="w-full h-0.5 bg-cyan-100 mt-5"></div> */}
        </div>
        <div className="w-full flex-1 h-fit prose lg:prose-xl">
          <PortableTextRenderer value={postData.post} />
          <div className="w-full h-0.5 bg-cyan-100 mt-5"></div>
        </div>

        <div className="flex gap-5 md:gap-20 relative mt-5 flex-col md:flex-row justify-start items-start">
          <aside className=" w-full ">
            <span className="uppercase text-2xl font-extrabold text-tertiary">
              Share:
            </span>
            <div className="flex text-3xl gap-5 text-gray-400 mt-2 [&<*]:border">
              <AiOutlineFacebook className="hover:text-cyan-300 duration-200 ease-in-out cursor-pointer" />
              <AiOutlineInstagram className="hover:text-cyan-300 duration-200 ease-in-out cursor-pointer" />
              <AiOutlineTwitter className="hover:text-cyan-300 duration-200 ease-in-out cursor-pointer" />
            </div>
          </aside>

          {/* <p className="text-xl">{post.description}</p> */}
          <div className="w-full flex items-center gap-5 ">
            {/* <Image
              src={post.authorImg}
              width={500}
              height={500}
              alt={`image of ${post.author}`}
              className="rounded-full w-20 h-20 object-cover"
            /> */}
            <div className="flex flex-col gap-1 italic">
              <span>{authorName}</span>
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 sm:py-12 dark:bg-cyan-100/30 mt-20 dark:text-gray-800">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">You may also like</h2>
            <p className="font-serif text-sm dark:text-gray-600">
              Explore more blogs here.
            </p>
          </div>
          {/* <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {blogData.slice(0, 4).map((blog, id) => (
              <BlogCard key={id} post={blog} />
            ))}
          </div> */}
        </div>
      </section>
    </article>
  );
};

export default page;
