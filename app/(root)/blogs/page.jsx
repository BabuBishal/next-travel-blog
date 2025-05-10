import Blogs from "@/components/shared/Blogs";
import TopPost from "@/components/shared/TopPost";

const page = () => {
  return (
    <div className="flex w-full lg:w-[65%] overflow-y-hidden h-fit  max-md:space-y-7 p-5 mx-5 lg:mx-auto md:gap-10 my-5">
      <Blogs />
      <TopPost />
    </div>
  );
};

export default page;
