import React from "react";

const HtmlComponent = () => {
  return (
    <>
      <div className="bg-white w-full px-5 my-5 lg:w-[60%] lg:mx-auto">
        <div className="w-full h-[400px] bg-gray-300 animate-pulse mb-5"></div>
        <div className="flex gap-2 md:gap-5 flex-wrap">
          <div className=" w-32 bg-gray-300 animate-pulse rounded px-3 py-1"></div>
          <div className=" w-32 bg-gray-300 animate-pulse rounded px-3 py-1"></div>
          <div className=" w-32 bg-gray-300 animate-pulse rounded px-3 py-1"></div>
        </div>
        <h1 className="bg-gray-300 animate-pulse h-8 w-3/4 rounded my-3"></h1>
        <div className="flex gap-5 md:gap-20 relative mt-10 flex-col md:flex-row ">
          <aside className="">
            <span className="bg-gray-300 animate-pulse h-6 w-1/2 rounded block mb-2"></span>
            <div className="flex text-3xl gap-5 text-gray-400 mt-2">
              <div className="bg-gray-300 animate-pulse rounded-full w-8 h-8"></div>
              <div className="bg-gray-300 animate-pulse rounded-full w-8 h-8"></div>
              <div className="bg-gray-300 animate-pulse rounded-full w-8 h-8"></div>
            </div>
          </aside>
          <article>
            <div className="flex items-center gap-5 ">
              <div className="bg-gray-300 animate-pulse rounded-full w-20 h-20"></div>
              <div className="flex flex-col gap-1">
                <span className="bg-gray-300 animate-pulse h-4 w-32 rounded"></span>
                <span className="bg-gray-300 animate-pulse h-4 w-24 rounded"></span>
              </div>
            </div>
          </article>
        </div>
        <section className="py-6 sm:py-12 bg-gray-200">
          <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="bg-gray-300 animate-pulse h-8 w-3/4 rounded mx-auto"></h2>
              <p className="bg-gray-300 animate-pulse"></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HtmlComponent;
