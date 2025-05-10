import blogData from "@/constants/blogData";
import Image from "next/image";
import Link from "next/link";
import Tag from "../ui/Tag";
import Overlay from "../ui/Overlay";
import TopPostCard from "./TopPostCard";

const TopPost = () => {
  const topPost = blogData.filter((blog) => blog.topPost === true);
  return (
    <section className="w-1/3  mb-5">
      <div className="w-full text-center">
        <h2 className="text-center text-2xl font-extrabold uppercase text-[#292828] inline-blick px-2 mb-10">
          Top Posts
        </h2>
      </div>
      <div className="flex h-full flex-col gap-12 items-center">
        {topPost.map((post, id) => (
          <TopPostCard post={post} key={id} />
        ))}
      </div>
    </section>
  );
};

export default TopPost;
