import { CgMenuGridO, CgClose } from "react-icons/cg";
import { navLinks } from "@/constants";
// import Route from "../ui/Route";
import { useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import useMenuActive from "@/hooks/useMenuActive";
import clsx from "clsx";

const MobileMenu = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setOpenMobileMenu(!openMobileMenu);
  };
  return (
    <>
      <div className="md:hidden z-[1000] " onClick={mobileMenuHandler}>
        {openMobileMenu ? <CgClose size={25} /> : <CgMenuGridO size={25} />}
      </div>

      {openMobileMenu && (
        <div
          onClick={() => setOpenMobileMenu(false)}
          className="fixed w-full h-screen top-0 left-0 bg-black/25 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute h-screen left-0 top-0 w-[60%] bg-white z-[999] px-5 border-r overflow-y-hidden flex flex-col gap-5"
          >
            <div className="border-b py-5">
              <Link href={"/"}>
                <h1 className=" text-primary text-center text-5xl max-md:text-3xl font-extrabold uppercase">
                  Wanderlust
                </h1>
              </Link>
            </div>
            <ul className="flex items-center justify-start gap-10 flex-col  flex-1 py-5 border-b">
              {navLinks.map((link, index) => {
                const isActive = useMenuActive(link.route);
                return (
                  <li key={index}>
                    <Link
                      href={link.route}
                      
                      onClick={() => setOpenMobileMenu(false)}
                      className={clsx(isActive && "text-primary ")}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-col gap-5 pb-10">
              <Button text="Log In" onClick={() => null} />
              <Button text="Sign In" onClick={() => null} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
