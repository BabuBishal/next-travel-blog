import Blogs from "@/components/shared/Blogs";
import TopPost from "@/components/shared/TopPost";
import BlogCardSkeleton from "@/components/skeletons/BlogCardSkeleton";
import { fetchBlogsData } from "@/lib/fetchData";
import { blogQuery } from "@/lib/queries";
import { Suspense } from "react";

const page = () => {
  const blogPromise = fetchBlogsData(blogQuery);
  return (
    <div className="flex w-full lg:w-[60%] overflow-y-hidden h-fit  max-md:space-y-7 p-5 mx-5 lg:mx-auto md:gap-10 my-5">
      <Suspense fallback={<BlogCardSkeleton />}>
        <Blogs blogPromise={blogPromise} />
      </Suspense>
      {/* <TopPost /> */}
    </div>
  );
};

export default page;
