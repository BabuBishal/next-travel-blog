import { AiOutlineArrowRight } from "react-icons/ai";

const BlogCardSkeleton = () => {
  return (
    <article className="relative rounded-lg overflow-hidden animate-pulse bg-cyan-100">
      <div className="h-[450px] " />
      <div className="absolute w-full h-full top-0 p-5 flex flex-col justify-start">
        <div className="flex gap-2 md:gap-5 flex-wrap mb-4">
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <span
                key={index}
                className="bg-cyan-200 w-20 h-6 rounded-full"
              ></span>
            ))}
        </div>
        <span className=" bg-cyan-200 w-1/2 h-8 rounded-2xl"></span>
      </div>
      <div className="absolute bottom-0 bg-cyan-200 rounded-tl-lg right-0 p-5">
        <AiOutlineArrowRight size={30} className="text-white" />
      </div>
    </article>
  );
};

export default BlogCardSkeleton;
