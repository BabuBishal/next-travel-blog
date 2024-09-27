import Hero from "@/components/shared/Hero";
import LatestPost from "@/components/shared/LatestPost";
import TopPost from "@/components/shared/TopPost";

export default function Home() {
  return (
  <>
  <Hero />
  <div className="w-[60%] grid grid-cols-1 md:grid-cols-3 mx-auto">
    <LatestPost />
    <TopPost />
  </div>
  </>
  );
}
