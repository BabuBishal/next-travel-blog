import blogData from "@/constants/blogData"

import  Tag from "../ui/Tag" 
import Overlay from "../ui/Overlay" 
import Link from "next/link"

const Hero = () => {
 
  const featuredPost = blogData?.filter((blog) => blog.featured === true)
  const topFeatured = featuredPost?.slice(0,1);
  const remainingFeatured = featuredPost?.slice(1,4)

 
  return (

    <section className="relative">
      <div className="w-full  z-1">
      {topFeatured?.map((post, id) => (
          <article
          key={id}
          className="w-full flex flex-col items-center gap-5 mb-5 text-center relative ">
            
           <div className="relative max-h-[600px] overflow-hidden">
            <img src={post.image} alt={`image for ${post.title}`} className="w-full h-full object-cover"/>
            <div className="absolute bottom-5 left-20 md:left-[42%] flex gap-2 md:gap-5 items-center justify-center">
           {post.tags.map((tag, id) => (
                <Tag  id={id} text={tag}></Tag>
            ))
            }
              </div>
           </div>
            <h2 className="font-bold text-2xl px-10">{post.title}</h2>
            <div className="md:w-[60%] text-justify px-10">{post.description}</div>
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