import blogData from "@/constants/blogData";
import Image from "next/image";
import Link from "next/link";
import Tag from "../ui/Tag";
import Overlay from "../ui/Overlay";

const TopPost = () => {
  const topPost = blogData.filter((blog) => blog.topPost === true);
  return (
    <section className="">
      <div className="w-full text-center">
        <h2 className="text-center text-2xl font-extrabold uppercase text-[#292828] inline-blick px-2 mb-10">
          Top Posts
        </h2>
      </div>
      <div className="flex h-full flex-col gap-12 items-center">
        {topPost.map((post, id) => (
          <Link
            href={{ pathname: `blog/${post.id}`, query: { ...post } }}
            key={id}
          >
            <article>
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
              <div className="flex gap-4 justify-center mt-2 text-tertiary">
                <span className="font-normal">By: {post.author}</span>
                <span className="font-normal">Date: {post.date}</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TopPost;
