"use client";

import { navLinks } from "@/constants";
import useMenuActive from "@/hooks/useMenuActive";
import Link from "next/link";
// import Route from "../ui/Route";
import clsx from "clsx";

const Footer = ({}) => {
  return (
    <footer className="bg-gray-100 text-gray-900 border-t">
      <div className="container flex flex-col p-4 mx-auto md:p-8  ">
        <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
          {navLinks.map((link, index) => {
            const isActive = useMenuActive(link.route);
            return (
              <li key={index}>
                <Link href={link.route} isActive={isActive}
                className={clsx(isActive && "text-primary ")}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-col justify-center pt-6 lg:pt-0 pb-5 ">
          <div className="flex justify-center space-x-4 ">
            <a
              rel="noopener noreferrer"
              href="#"
              title="Instagram"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-primary text-gray-50"
            >
              <svg fill="currentColor" className="w-4 h-4">
                <use href="/icons.svg#icon-instagram" />
              </svg>
            </a>

            <a
              rel="noopener noreferrer"
              href="#"
              title="Twitter"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-primary text-gray-50"
            >
              <svg fill="currentColor" className="w-4 h-4">
                <use href="/icons.svg#icon-twitter" />
              </svg>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              title="Facebook"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-primary text-gray-50"
            >
              <svg fill="currentColor" className="w-4 h-4">
                <use href="/icons.svg#icon-facebook" />
              </svg>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              title="Gmail"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-primary text-gray-50"
            >
              <svg fill="currentColor" className="w-4 h-4">
                <use href="/icons.svg#icon-gmail" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <div className=" w-full border-t pt-5 flex  items-center justify-center gap-3 ">
            <div className="text-sm">
              <span>&copy; All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
