import Tag from "@/components/ui/Tag";
import Image from "next/image";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

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
    </div>
  );
};

export default page;
