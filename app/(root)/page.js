import Hero from "@/components/shared/Hero";
import LatestPost from "@/components/shared/LatestPost";
import TopPost from "@/components/shared/TopPost";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-full lg:w-[60%] flex flex-col md:flex-row gap-5 lg:gap-10 overflow-hidden mx-5 lg:mx-auto my-5">
        <LatestPost />
        <TopPost />
      </div>
    </>
  );
}
