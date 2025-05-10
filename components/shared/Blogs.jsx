"use client";

import { useEffect, useState, Suspense } from "react";
import blogData from "@/constants/blogData";
import BlogCard from "./BlogCard";
import Button from "../ui/Button";
import { client } from "@/sanity/lib/client";
import BlogCardSkeleton from "../skeletons/BlogCardSkeleton";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleBlogs, setVisibleBlogs] = useState(5);

  const showMoreBlogs = () => {
    setVisibleBlogs((previousVisibleBlogs) => previousVisibleBlogs + 3);
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const blogsData = await client.fetch(
          `*[_type == "post"]{
            _id,
            title,
            slug,
            publishedAt,
            mainImage,
            author->{_id, name, email},
            categories[]->{_id, title},
            post
          }`
        );
        setBlogs(blogsData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Failed to fetch blogs", error);
      }
    };

    fetchBlogs();
  }, []);

  // console.log(blogs);
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
        ) : loading ? (
          Array.from({ length: 3 }, (_, index) => (
            <BlogCardSkeleton key={index} />
          ))
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
