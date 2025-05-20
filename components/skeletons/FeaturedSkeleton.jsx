import React from "react";

const FeaturedSkeleton = () => {
  return (
    <article class="flex flex-col gap-3 items-center text-center relative bg-white">
      <div class="relative overflow-hidden h-72 bg-cyan-100 animate-pulse rounded-lg"></div>

      <div class="flex gap-2 md:gap-5 items-center justify-center">
        <div class="bg-cyan-200 animate-pulse rounded-full h-6 w-20"></div>
        <div class="bg-cyan-200 animate-pulse rounded-full h-6 w-20"></div>
      </div>
      <div class="bg-cyan-200 animate-pulse h-6 w-3/4 rounded"></div>
      <div class="bg-cyan-200 animate-pulse h-4 w-1/2 rounded"></div>
    </article>
  );
};

export default FeaturedSkeleton;
