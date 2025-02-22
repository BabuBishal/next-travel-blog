import Image from "next/image";
import Link from "next/link";
import Tag from "../ui/Tag";
import Overlay from "../ui/Overlay";
import { AiOutlineArrowRight } from "react-icons/ai";

const BlogCard = ({ post }) => {
  return (
    <article className="relative rounded-lg overflow-hidden">
      <div className=" h-[450px] relative ">
        <Image
          src={post.image}
          fill
          alt={`image for ${post.title}`}
          className="object-cover"
        />
        <Overlay />
      </div>
      <div className="absolute w-full h-full top-0 p-5 flex flex-col justify-start">
        <div className="  flex gap-2 md:gap-5 flex-wrap">
          {post.tags.map((tag, id) => (
            <Tag key={id} text={tag} />
          ))}
        </div>
        <h3 className="text-3xl font-extrabold uppercase text-white drop-shadow-lg">
          {post.title}
        </h3>
      </div>
      <Link
        href={{ pathname: `/blogs/${post.id}`, query: { ...post } }}
        className="absolute bottom-0 right-0 bg-tertiary p-5 text-white rounded-tl-lg z-6 cursor-pointer"
      >
        <AiOutlineArrowRight size={30} />
      </Link>
    </article>
  );
};

export default BlogCard;
