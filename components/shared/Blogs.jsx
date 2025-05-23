"use client";

import { useState, use } from "react";

import BlogCard from "./BlogCard";
import Button from "../ui/Button";

const Blogs = ({ blogPromise }) => {
  const [visibleBlogs, setVisibleBlogs] = useState(5);

  const showMoreBlogs = () => {
    setVisibleBlogs((previousVisibleBlogs) => previousVisibleBlogs + 3);
  };

  const blogs = use(blogPromise);


  return (
    <section className="w-full max-w-2/3 mb-5">
      <div className="w-full text-center">
        <h2 className="text-center text-3xl font-extrabold uppercase text-secondary inline-block px-2 mb-10">
          All Posts
        </h2>
      </div>
      <div className="flex flex-col gap-10 h-full">
        {!blogs ? (
          <p>No blogs available</p>
        ) : (
          blogs
            .slice(0, visibleBlogs)
            .map((post) => <BlogCard key={post._id} post={post} />)
        )}

        {visibleBlogs < blogs.length && (
          <div className="flex justify-center">
            <Button onClick={showMoreBlogs} text="Show more" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
