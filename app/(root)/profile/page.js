"use client";

import BlogCard1 from "@/components/shared/BlogCard1";
import { blogPostByAuthorQuery } from "@/lib/queries";
import { client } from "@/sanity/lib/client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

const Profile = () => {
  const { data: session, status } = useSession();

  const [authorBlogs, setAuthorBlogs] = useState([]);

  useEffect(() => {
    if (session?.user) {
      client
        .fetch(blogPostByAuthorQuery, { authorEmail: session.user.email })
        .then((data) => setAuthorBlogs(data))
        .catch((err) => console.error("Failed to fetch author blogs:", err));
    }
  }, [session]);

  if (status === "loading")
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  if (status === "unauthenticated") redirect("/");

  return (
    <>
      <div className="min-h-dvh h-full w-full max-w-[1200px] mx-auto mb-5 flex gap-10">
        <div className="w-full flex justify-between mt-10 gap-5">
          <div className="w-[75%] flex flex-col gap-5">
            {" "}
            <h1 className="text-3xl font-medium">My Posts</h1>
            <div className="space-y-7">
              {!!authorBlogs ? (
                authorBlogs?.map((blog) => (
                  <BlogCard1 key={blog?._id} post={blog} />
                ))
              ) : (
                <p>No blogs found.</p>
              )}
            </div>
          </div>
          <div className="w-1/5 mt-10">
            {/* <CreatePostForm /> */}
            <div className="flex flex-col gap-3 bg-cyan-50 justify-center items-center p-5 shadow-lg rounded-lg">
              <span className="text-lg font-medium ">
                {/* <Button text="New post" /> */}
                Create a new post.
              </span>
              <Link href="/profile/createPost">
                <IoAddCircleOutline className="text-3xl text-primary cursor-pointer hover:scale-105 duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* {openPostForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-cyan-50 p-10 rounded-lg shadow-lg">
            <CreatePostForm />
            <button
              className="absolute top-2 right-2 text-cyan-500 hover:text-cyan-700"
              onClick={() => setOpenPostForm(false)}
            >
              <IoClose className="text-3xl" />
            </button>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Profile;
