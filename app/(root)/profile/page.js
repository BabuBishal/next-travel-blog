"use client";
import CreatePostForm from "@/components/shared/CreatePostForm";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

const page = () => {
  const { data: session } = useSession();
  if (!session) redirect("/");
  return (
    <div className="min-h-dvh h-full w-full max-w-[1200px] mx-auto mb-5 flex gap-10">
      <div className="w-full flex mt-10 gap-5">
        <div className="w-full flex flex-col gap-5">
          <h1 className="text-3xl font-medium">My Posts</h1>
        </div>
        <div className="w-full flex flex-col gap-5">
          <CreatePostForm />
        </div>
      </div>
    </div>
  );
};

export default page;
