const HeroFeaturedSkeleton = () => {
  return (
    <article className="relative w-screen h-[500px] flex items-center justify-center gap-5 mb-5 text-center bg-cyan-100">
      <div className="w-full h-full bg-cyan-100"></div>
      <div className="absolute z-10 bottom-8 w-full flex gap-2 md:gap-5 justify-center  animate-pulse">
        <span className="bg-cyan-300/50 rounded-full h-8 w-24"></span>
        <span className="bg-cyan-300/50 rounded-full h-8 w-24"></span>
        <h2 className="absolute bottom-12 bg-cyan-200 rounded-lg h-10 w-1/2 "></h2>
      </div>
    </article>
  );
};

export default HeroFeaturedSkeleton;
