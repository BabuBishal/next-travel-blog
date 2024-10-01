import Tag from "@/components/ui/Tag";
import Image from "next/image";
import BlogCard from "@/components/shared/BlogCard";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import blogData from "@/constants/blogData";

const page = ({ searchParams }) => {
  const post = searchParams;
  return (
    <div className="w-[60%] mx-auto">
      <div className="w-full h-[400px] relative mb-5 ">
        <Image
          alt={`image for ${post.title}`}
          src={post.image}
          className="object-cover"
          fill
        />
      </div>
      <div className="  flex gap-2 md:gap-5 flex-wrap">
        {post.tags.map((tag, id) => (
          <Tag key={id} text={tag} />
        ))}
      </div>
      <h1 className="text-4xl uppercase font-extrabold my-3 ">{post.title}</h1>
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
          <p className="text-xl">{post.description}</p>
          <div className="flex items-center gap-5 mt-5">
            <Image
              src={post.authorImg}
              width={500}
              height={500}
              alt={`image of ${post.author}`}
              className="rounded-full w-20 h-20 object-cover"
            />
            <div className="flex flex-col gap-1" >
              <span>{post.author}</span>
              <span>{post.date}</span>
            </div>
          </div>
        </article>
      </div>

      <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold">You may like</h2>
			<p className="font-serif text-sm dark:text-gray-600">Explore more blogs here.</p>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
		{blogData.slice(0,4).map((blog, id) => (
      <BlogCard key={id} post={blog} />
    ))}
		</div>
	</div>
</section>
    </div>
  );
};

export default page;
