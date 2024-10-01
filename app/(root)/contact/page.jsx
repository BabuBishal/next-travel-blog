"use client"

import Image from "next/image";
import Button from "@/components/ui/Button.jsx";
import Overlay from "@/components/ui/Overlay";

const page = () => {
  return (
    <div className="w-full lg:w-[60%] mx-5 lg:mx-auto">
      <div className="relative h-[500px] w-full ">
        <Image
          src="/assets/contact1.jpg"
          fill
          alt="contact image"
          objectFit="cover"
        />
        <Overlay />
        <h1 className="flex absolute w-full h-full justify-center items-center text-4xl font-extrabold uppercase text-white">
          Contact Us
        </h1>
      </div>

      <section className="py-6  text-gray-900 my-5">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                  <use href="/icons.svg#icon-location" />
                </svg>
                <span>Fake address, 9999 City</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <use href="/icons.svg#icon-phone" />
                </svg>
                <span>123456789</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <use href="/icons.svg#icon-mail" />
                </svg>
                <span>contact@business.com</span>
              </p>
            </div>
          </div>
          <form
            noValidate=""
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
          >
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                placeholder="Leroy Jenkins"
                className="block p-1 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-bg-primary bg-gray-200"
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                placeholder="leroy@jenkins.com"
                className="block p-1 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-bg-primary bg-gray-200"
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                rows="3"
                className="block p-1 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-bg-primary bg-gray-200"
              ></textarea>
            </label>
            {/* <button
              type="button"
              className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-violet-600 text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600"
            >
              Submit
            </button> */}
            <Button text="submit" onClick={() => null}/>
          </form>
        </div>
      </section>
    </div>
  );
};

export default page;
