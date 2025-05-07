import Blogs from "@/components/shared/Blogs";
import TopPost from "@/components/shared/TopPost";

const page = () => {
  return (
    <div className="flex w-full lg:w-[60%] overflow-y-hidden h-fit  max-md:space-y-7 mx-5 lg:mx-auto md:gap-10 my-5">
      <Blogs />
      <TopPost />
    </div>
  );
};

export default page;
