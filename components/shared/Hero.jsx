import blogData from "@/constants/blogData"

import  Tag from "../ui/Tag" 
import Overlay from "../ui/Overlay" 
import Link from "next/link"

const Hero = () => {
  console.log(blogData);
  const featuredPost = blogData?.filter((blog) => blog.featured === true)
  const topFeatured = featuredPost?.slice(0,1);
  const remainingFeatured = featuredPost?.slice(1,4)

  console.log(topFeatured)

  return (

    <section className="relative">
      <div className="w-full max-w-[1450px] z-1">
      {topFeatured?.map((post, id) => (
          <article
          key={id}
          className="flex flex-col items-center gap-5 mb-5 text-center relative ">
            
           <div className="flex gap-2 items-center justify-center">
            <img src={post.image} alt="" />
           {post.tags.map((tag, id) => (
              <Tag  id={id} text={tag}></Tag>
            ))
            }
           </div>
            <h2>{post.title}</h2>
            <div className="w-[600px]">{post.description}</div>
            <div className="flex items-center gap-3  text-primary font-normal justify-center">
              <div className="w-10 h-10 rounded-full bg-black"></div>
              <h4>{post.author}</h4>
              <span className="italic">{post.date}</span>
            </div>
            
          </article>
        )) }
      </div>
    </section>
  )
}

export default Hero