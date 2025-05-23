import { AiOutlineArrowRight } from "react-icons/ai";

const TopPostsSkeleton = () => {
  return (
    <article className="relative rounded-sm overflow-hidden animate-pulse bg-cyan-100">
      <div className="h-[450px] w-full"></div>
      <div className="flex gap-2 md:gap-5 flex-wrap mb-4">
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <span
              key={index}
              className="bg-cyan-200 w-20 h-6 rounded-full"
            ></span>
          ))}
        <span className=" bg-cyan-200 w-1/2 h-8 rounded-2xl"></span>
      </div>
      <div className="flex gap-4 justify-between mt-2 ">
        <span className="w-1/5 bg-cyan-200"></span>
        <span className="w-1/5 bg-cyan-200"> </span>
      </div>
    </article>
  );
};

export default TopPostsSkeleton;
