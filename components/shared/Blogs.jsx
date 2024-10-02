"use client";

import { useState } from "react";
import blogData from "@/constants/blogData";
import BlogCard from "./BlogCard";
import Button from "../ui/Button";

const Blogs = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(5);

  const showMoreBlogs = () => {
    setVisibleBlogs((previousVisibleBlogs) => previousVisibleBlogs + 3);
  };

  return (
    <section className="col-span-2 ">
      <div className="w-full text-center">
        <h2 className="text-center text-3xl font-extrabold uppercase text-secondary inline-block px-2 mb-10">
          All Posts
        </h2>
      </div>
      <div className="flex flex-col gap-10 h-full">
        {blogData.slice(0, visibleBlogs).map((post, id) => (
          <BlogCard key={id} post={post} />
        ))}
        {visibleBlogs < blogData.length && (
          <div className="flex justify-center">
            <Button onClick={showMoreBlogs} text="Show more" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
