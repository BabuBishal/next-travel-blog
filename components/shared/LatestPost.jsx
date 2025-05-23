// "use client";

// import { useState } from "react";
// import blogData from "@/constants/blogData";
import { client } from "@/sanity/lib/client";
import BlogCard from "./BlogCard";
import { latestPostsQuery } from "@/lib/queries";
// import Button from "../ui/Button";

const LatestPost = async () => {
  // const [visibleBlogs, setVisibleBlogs] = useState(5);

  // const showMoreBlogs = () => {
  //   setVisibleBlogs((previousVisibleBlogs) => previousVisibleBlogs + 3);
  // };
  // const latestpost = blogData.filter((blog) => blog.latestPost === true);

  const recentPosts = await client.fetch(
  latestPostsQuery
  );

  return (
    <section className="w-full lg:w-2/3 flex-1 mb-5">
      <div className="w-full text-center">
        <h2 className="text-center text-3xl font-extrabold uppercase text-secondary inline-block px-2 mb-10">
          Latest Posts
        </h2>
      </div>
      <div className="flex flex-col gap-10 h-full ">
        {recentPosts.map((post, id) => (
          <BlogCard key={id} post={post} />
        ))}
        {/* {visibleBlogs < latestpost.length && (
          <div className="flex justify-center">
            <Button onClick={showMoreBlogs} text="Show more" />
          </div>
        )} */}
      </div>
    </section>
  );
};

export default LatestPost;
