import React from "react";

const page = () => {
  return (
    <div className="min-h-dvh h-full w-full max-w-[1200px] mx-auto flex gap-10">
      <div className="w-full flex  gap-5">
        <div className="w-full flex flex-col gap-5">
          <h1 className="text-3xl font-semibold">Profile</h1>
        </div>
        <div className="w-full text-3xl font-medium flex flex-col gap-5">
          Create Post
        </div>
      </div>
    </div>
  );
};

export default page;
