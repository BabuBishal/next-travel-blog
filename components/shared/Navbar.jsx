"use client";

import Link from "next/link";
import { navLinks } from "@/constants";
import clsx from "clsx";
import Route from "../ui/Route";
import Button from "../ui/Button";
import { IoSearch, IoPersonCircle } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
import useMenuActive from "@/hooks/useMenuActive";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center  md:py-2 py-4 mt-2 mx-auto">
      <div className="w-[60%] max-md:w-[90%] flex flex-col items-center gap-5 md:mx-auto">
        <div className="flex gap-10 justify-start items-center ">
          <Link href={"/"}>
            <h1 className=" text-primary text-5xl max-md:text-3xl font-extrabold uppercase">
              Wanderlust
            </h1>
          </Link>
        </div>
        <div className="w-full flex justify-between gap-5 items-center max-md:hidden ">
          <div className="min-w-[20%]">
            <IoSearch size={25} />
          </div>
          <ul className="flex flex-1 items-center  justify-center gap-10 ">
            {navLinks.map((link, index) => {
              const isActive = useMenuActive(link.route)
              return (
              <li key={index}>
                <Route route={link.route} label={link.label} isActive={isActive}/>
              </li>
            )})}
          </ul>
          <div className="flex items-center justify-end gap-2 min-w-[20%]">
            
            <IoPersonCircle size={30} />
          </div>
        </div>
      </div>
      <MobileMenu />
    </nav>
  );
};

export default Navbar;
