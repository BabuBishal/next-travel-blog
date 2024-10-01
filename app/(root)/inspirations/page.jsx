"use client"

import React, { useEffect, useState } from 'react'
import blogData from '@/constants/blogData'
import Tag from '@/components/ui/Tag';

const page = () => {
  const [tagsCollection, setTagsCollection] = useState([]);

useEffect(() => {
  const allTags = new Set(); // Use Set to store unique tags

  blogData.forEach((item) => {
    item.tags.forEach((tag) => {
      allTags.add(tag); 
    });
  });

  setTagsCollection([...allTags]); 
}, [blogData]); 

  console.log(tagsCollection)

  return (
    <div className='w-full mx-5 lg:w-[60%] lg:mx-auto '> 
    <div className='flex gap-2 lg:gap-2 items-center  flex-wrap'>

      {tagsCollection.map((tag, id) => 
      (
        <div key={id} className=" ">
          <Tag key={id} text={tag} />
        
      </div>
      ))}
      </div>
    </div>
  )
}

export default page