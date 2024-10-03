"use client";

import Link from "next/link";
import { navLinks } from "@/constants";
import clsx from "clsx";
// import Route from "../ui/Route";
// import Button from "../ui/Button";
import { IoSearch, IoPersonCircle, IoClose } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
import useMenuActive from "@/hooks/useMenuActive";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false)
  const [loginMode, setLoginMode] = useState("signup")

  const handleLogin = () => {
    setShowLoginPage(!showLoginPage)
  }

  const handleSignup = () => {
    setLoginMode("signin")
  }

  const handleSignin = () => {
    setLoginMode("signup")
    
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={clsx(
        "w-full flex items-center py-4 mx-auto mb-5",
        isScrolling
          ? "fixed top-0 bg-white z-10 border-b"
          : "relative border-none"
      )}
    >
      <div className="w-full lg:w-[60%] mx-5 flex flex-col items-center gap-5 lg:mx-auto">
        <div className="w-full flex gap-10 justify-center items-center relative">
          <Link href={"/"}>
            <h1 className=" text-primary text-5xl max-md:text-3xl font-extrabold uppercase ">
              Wanderlust
            </h1>
          </Link>
      <MobileMenu />

        </div>
        <div className="w-full flex justify-between gap-5 items-center max-md:hidden mx-auto ">
          <div className="max-w-[20%]">
            <IoSearch size={25} />
          </div>
          <ul className="flex flex-1 items-center  justify-center gap-10 text-xl">
            {navLinks.map((link, index) => {
              const isActive = useMenuActive(link.route);
              return (
                <li key={index}>
                  <Link
                    href={link.route}
                    className={clsx(isActive && "text-primary ")}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center justify-end gap-2 max-w-[10%] z-[100]" onClick={handleLogin}>
           {!showLoginPage ? 
            <IoPersonCircle size={30}  className="" /> :
            <IoClose size={30} />}
          </div>
        </div>
      </div>
      <div className={clsx("absolute w-full h-screen bg-tertiary z-[99]", showLoginPage ? "top-20 mx-auto flex justify-center items-center" : "hidden")}>
      { loginMode === "signin" && <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign in</h1>
		<p className="text-sm dark:text-gray-600">Sign in to access your account</p>
	</div>
	<form noValidate="" action="" className="space-y-12">
		<div className="space-y-4">
			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="user@email.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign in</button>
			</div>
			<p className="px-6 text-sm text-center dark:text-gray-600">Don't have an account yet?
				<a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600" onClick={handleSignin}>Sign up</a>.
			</p>
		</div>
	</form>
</div>}
{
  loginMode === "signup" && <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign Up</h1>
		<p className="text-sm dark:text-gray-600">Sign up to create your account</p>
	</div>
	<form noValidate="" action="" className="space-y-12">
		<div className="space-y-4">
    <div>
				<label htmlFor="username" className="block mb-2 text-sm">Username</label>
				<input type="text" name="username" id="username" placeholder="Your Username" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="user@email.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Password</label>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign up</button>
			</div>
			<p className="px-6 text-sm text-center dark:text-gray-600">Have an account already?
				<a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600" onClick={handleSignup}>Sign in</a>.
			</p>
		</div>
	</form>
</div>
}
      </div>
    </nav>
  );
};

export default Navbar;
