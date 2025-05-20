import { Suspense } from "react";
import TopPostCard from "./TopPostCard";
import TopPostsSkeleton from "../skeletons/TopPostsSkeleton";
import { client } from "@/sanity/lib/client";
import { topPostsQuery } from "@/lib/queries";

const TopPost = async () => {
  const topPost = await client.fetch(topPostsQuery);
  return (
    <section className="w-1/3  mb-5">
      <div className="w-full text-center">
        <h2 className="text-center text-2xl font-extrabold uppercase text-[#292828] inline-blick px-2 mb-10">
          Top Posts
        </h2>
      </div>
      <div className="flex h-full flex-col gap-12 items-center">
        <Suspense fallback={<TopPostsSkeleton />}>
          {topPost?.posts?.map((post) => (
            <TopPostCard post={post} key={post._id} />
          ))}
        </Suspense>
      </div>
    </section>
  );
};

export default TopPost;
