import Tag from "@/components/ui/Tag";
import Image from "next/image";
import BlogCard from "@/components/shared/BlogCard";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import blogData from "@/constants/blogData";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const page = async ({ searchParams }) => {
  const params = searchParams;
  // Replace with the actual ID or pass dynamically
  const post = await client.fetch(
    `*[_type == "post" && _id == $id][0]{
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    author->{_id, name, email},
    categories[]->{_id, title},
    post
  }`,
    { id: params }
  );

  // const imageUrl = urlFor(post?.mainImage).url();

  console.log("params", params);
  return (
    <div className="w-full mx-5 my-5 lg:w-[60%] lg:mx-auto">
      <div className="w-full h-[400px] relative mb-5 ">
        {/* <Image
          alt={`image for ${post?.title}`}
          src={imageUrl || ""}
          width={800}
          height={400}
          priority
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        /> */}
        {}
      </div>
      <div className="  flex gap-2 md:gap-5 flex-wrap">
        {post?.categories?.map(({ title, _id }) => (
          <Tag key={_id} text={title} />
        ))}
      </div>
      <h1 className="text-4xl uppercase font-extrabold my-3 ">{post?.title}</h1>
      <div className="flex gap-5 md:gap-20 relative mt-10 flex-col md:flex-row">
        <aside className="md:sticky md:top-2/4 md:h-screen">
          <span className="uppercase text-2xl font-extrabold text-tertiary">
            {" "}
            Share:
          </span>
          <div className="flex text-3xl gap-5 text-gray-400 mt-2 [&<*]:border">
            <AiOutlineFacebook />
            <AiOutlineInstagram />
            <AiOutlineTwitter />
          </div>
        </aside>
        <article>
          {/* <p className="text-xl">{post.description}</p> */}
          <div className="flex items-center gap-5 mt-5">
            {/* <Image
              src={post.authorImg}
              width={500}
              height={500}
              alt={`image of ${post.author}`}
              className="rounded-full w-20 h-20 object-cover"
            /> */}
            <div className="flex flex-col gap-1">
              <span>{post?.author}</span>
              <span>{post?.publishedAt}</span>
            </div>
          </div>
        </article>
      </div>

      <section className="py-6 sm:py-12 dark:bg-cyan-100/30 dark:text-gray-800">
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
    </div>
  );
};

export default page;
