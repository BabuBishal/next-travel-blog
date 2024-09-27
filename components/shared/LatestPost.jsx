"use client"

import { useState } from "react"
import blogData from "@/constants/blogData"
import BlogCard from "./BlogCard"
import Button from "../ui/Button"


const LatestPost = () => {
  
  const latestpost = blogData.filter((blog) => blog.latestPost === true)
  
  return (
    <section className="col-span-2" >
      <div className="w-full text-center">
        <h2 className="text-center text-3xl font-extrabold uppercase text-secondary inline-block px-2 mb-10" >Latest Post</h2>
      </div>
      <div className="flex flex-col gap-10 h-full" >
        {latestpost.map((post, id) => (
          <BlogCard
          post={post}
          />
        ))}
      </div>
    </section>
  )
}

export default LatestPost