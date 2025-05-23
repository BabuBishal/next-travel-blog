"use client";
// import CreatePostForm from "@/components/shared/CreatePostForm";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { IoAddCircleOutline, IoClose } from "react-icons/io5";

const Profile = () => {
  const { data: session } = useSession();
  if (!session) redirect("/");

  // const [openPostForm, setOpenPostForm] = useState(false);

  // function handlePostCreation() {
  //   setOpenPostForm(true);
  // }
  return (
    <>
      <div className="min-h-dvh h-full w-full max-w-[1200px] mx-auto mb-5 flex gap-10">
        <div className="w-full flex mt-10 gap-5">
          <div className="w-4/5 flex flex-col gap-5">
            <h1 className="text-3xl font-medium">My Posts</h1>
            <div className="">list of posts</div>
          </div>
          <div className="w-1/5 ">
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
