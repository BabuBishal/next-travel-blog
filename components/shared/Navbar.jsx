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
import Login from "./Login";

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [loginMode, setLoginMode] = useState("Sign In");

  const activeLinks = navLinks.map((link) => {
    const isActive = useMenuActive(link.route); // Call the hook here
    return { ...link, isActive }; // Store the active state in each link
  });

  const handleLogin = () => {
    setShowLoginPage(!showLoginPage);
  };

  const handleClick = () => {
    loginMode === "Sign In" && setLoginMode("Sign Up");
    loginMode === "Sign Up" && setLoginMode("Sign In");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 32) {
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
        "w-full flex items-center py-4 mx-auto mb-5 relative border-none",
        isScrolling && "fixed top-0 bg-white z-10 border-b"
      )}
    >
      <div className="w-full lg:w-[60%] mx-5 flex flex-col items-center gap-5 lg:mx-auto">
        <div className="w-full flex gap-10 justify-center items-center relative">
          <Link href={"/"}>
            <h1 className=" text-primary text-5xl max-md:text-3xl font-extrabold uppercase ">
              Wanderlust
            </h1>
          </Link>
          <MobileMenu
            setShowLoginPage={setShowLoginPage}
            showLoginPage={showLoginPage}
            setLoginMode={setLoginMode}
            handleLogin={handleLogin}
          />
        </div>
        <div className="w-full flex justify-between gap-5 items-center max-md:hidden mx-auto ">
          <div className="max-w-[20%]">
            <IoSearch size={25} />
          </div>
          <ul className="flex flex-1 items-center  justify-center gap-10 text-xl">
            {activeLinks.map((link, index) => {
              return (
                <li key={index}>
                  <Link
                    href={link.route}
                    className={clsx(link.isActive && "text-primary ")}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div
            className="flex items-center justify-end gap-2 max-w-[10%] z-[100]"
            onClick={handleLogin}
          >
            {!showLoginPage ? (
              <IoPersonCircle size={30} />
            ) : (
              <IoClose size={30} />
            )}
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "absolute w-full h-screen bg-tertiary z-[99]",
          showLoginPage
            ? "top-20 mx-auto flex justify-center items-center"
            : "hidden"
        )}
      >
        <Login loginMode={loginMode} handleClick={handleClick} />
      </div>
    </nav>
  );
};

export default Navbar;
