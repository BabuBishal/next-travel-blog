"use client";
import { CgMenuGridO, CgClose } from "react-icons/cg";
import { navLinks } from "@/constants";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import clsx from "clsx";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MobileMenu = ({
  setShowLoginPage,
  showLoginPage,
  setLoginMode,
  handleLogin,
}) => {
  const [user, setUser] = useState(null); // Added explicit null initialization
  const pathname = usePathname();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  // Calculate active links directly from pathname
  const activeLinks = navLinks.map((link) => ({
    ...link,
    isActive:
      (pathname.includes(link.route) && link.route.length > 1) ||
      pathname === link.route,
  }));

  // Handle body scroll when menu is open
  useEffect(() => {
    if (openMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openMobileMenu]);

  const mobileMenuHandler = () => {
    setOpenMobileMenu((prev) => !prev);
  };

  const handleLogIn = () => {
    setShowLoginPage(true);
    setLoginMode("Sign In");
    setOpenMobileMenu(false);
  };

  const handleSignup = () => {
    setShowLoginPage(true);
    setLoginMode("Sign Up");
    setOpenMobileMenu(false);
  };

  return (
    <>
      <button
        className="md:hidden z-[90] absolute right-4 p-2"
        onClick={mobileMenuHandler}
        aria-label={openMobileMenu ? "Close menu" : "Open menu"}
      >
        {openMobileMenu ? <CgClose size={25} /> : <CgMenuGridO size={25} />}
      </button>

      {openMobileMenu && (
        <div
          onClick={() => setOpenMobileMenu(false)}
          className="fixed inset-0 bg-black/25 z-50"
          aria-hidden="true"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute h-full left-0 top-0 w-[60%] bg-white z-[999] px-5 border-r overflow-y-auto flex flex-col gap-5"
            role="dialog"
            aria-modal="true"
          >
            <div className="border-b py-5">
              <Link href="/">
                <h1 className="text-primary text-center text-5xl max-md:text-3xl font-extrabold uppercase">
                  Wanderlust
                </h1>
              </Link>
            </div>

            {user && (
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8">
                  <Image
                    src="/placeholder-avatar.jpg"
                    alt={`${user}'s avatar`}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="font-medium">{user}</h3>
              </div>
            )}

            <nav>
              <ul className="flex items-center justify-start gap-10 flex-col flex-1 py-5 border-b">
                {activeLinks.map((link) => (
                  <li key={link.route}>
                    <Link
                      href={link.route}
                      onClick={() => setOpenMobileMenu(false)}
                      className={clsx(
                        "transition-colors hover:text-primary",
                        link.isActive && "text-primary"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex flex-col gap-5 pb-10">
              <Button text="Log In" onClick={handleLogIn} />
              <Button text="Sign Up" onClick={handleSignup} />
            </div>
          </div>
        </div>
      )}

      {showLoginPage && (
        <button
          className="absolute flex justify-end gap-2 max-w-[10%] z-[100] lg:hidden top-20 right-5"
          onClick={handleLogin}
          aria-label="Close login"
        >
          <IoClose size={30} />
        </button>
      )}
    </>
  );
};

export default MobileMenu;
