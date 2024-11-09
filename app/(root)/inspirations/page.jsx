"use client";

import React, { useEffect, useState } from "react";
import blogData from "@/constants/blogData";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import BlogCard from "@/components/shared/BlogCard";

const Page = () => {
  const [tagsCollection, setTagsCollection] = useState([]);
  const [inspiration, setInspiration] = useState("Culture");
  const [visibleBlogs, setVisibleBlogs] = useState(5);

  const showMoreBlogs = () => {
    setVisibleBlogs((previousVisibleBlogs) => previousVisibleBlogs + 3);
  };

  const inspirationFilteredData = blogData.filter((blogdata) =>
    blogdata.tags.includes(inspiration)
  );
  console.log(inspirationFilteredData);
  useEffect(() => {
    const allTags = new Set(); // Use Set to store unique tags

    blogData.forEach((item) => {
      item.tags.forEach((tag) => {
        allTags.add(tag);
      });
    });

    setTagsCollection([...allTags]);
  },[]);

  // console.log(tagsCollection);

  return (
    <div className="w-full mx-5 lg:w-[60%] lg:mx-auto my-5">
      <div className="flex gap-2  items-center  flex-wrap max-h-[500px] overflow-auto">
        {tagsCollection.map((tag, id) => (
          <div key={id} className=" ">
            <Tag key={id} text={tag} onClick={() => setInspiration(tag)} />
          </div>
        ))}
      </div>
      <div className="w-full text-center mt-10">
        <h2 className="text-center text-3xl font-extrabold uppercase text-secondary inline-block px-2 mb-10">
          {inspiration || "All"}
        </h2>
      </div>
      <div className="flex flex-col gap-10 h-full">
        {inspirationFilteredData.slice(0, visibleBlogs).map((post, id) => (
          <BlogCard key={id} post={post} />
        ))}
        {visibleBlogs < blogData.length && (
          <div className="flex justify-center">
            <Button onClick={showMoreBlogs} text="Show more" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
