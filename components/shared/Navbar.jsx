"use client";
import Link from "next/link";
import { navLinks } from "@/constants";
import clsx from "clsx";
import { IoSearch } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Button from "../ui/Button";

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  const [activeLinks, setActiveLinks] = useState([]);

  useEffect(() => {
    const updatedLinks = navLinks.map((link) => ({
      ...link,
      isActive:
        (pathname.includes(link.route) && link.route.length > 1) ||
        pathname === link.route,
    }));
    setActiveLinks(updatedLinks);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLoginClick = () => {
    signIn("google", { callbackUrl: "/" });
  };
  const handleLogoutClick = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <nav
      className={clsx(
        "w-full flex items-center py-4 mx-auto mb-5 relative border-none",
        isScrolling && "fixed top-0 bg-white z-10 border-b"
      )}
    >
      <div className="w-full lg:w-[60%] mx-5 flex flex-col items-center gap-5 lg:mx-auto">
        <div className="w-full flex gap-10 justify-center items-center relative">
          <Link href="/">
            <h1 className="text-primary text-5xl max-md:text-3xl font-extrabold uppercase">
              Wanderlust
            </h1>
          </Link>
          <MobileMenu />
        </div>
        <div className="w-full flex justify-between gap-5 items-center max-md:hidden mx-auto">
          <div className="max-w-[20%]">
            <IoSearch size={25} />
          </div>
          <ul className="flex flex-1 items-center justify-center gap-10 text-xl">
            {activeLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.route}
                  className={clsx(link.isActive && "text-primary")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="relative flex items-center space-x-4">
            {session ? (
              <>
                <img
                  src={session?.user?.image || "/hacker.png"}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/hacker.png"; // fallback
                  }}
                  alt="Profile"
                  onMouseOver={() => setDropdownOpen(true)}
                  onMouseOut={() => setDropdownOpen(false)}
                  className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-300 hover:border-teal-500 transition"
                />

                {dropdownOpen && (
                  <div
                    className="absolute -right-10 top-10 w-52 bg-transparent p-5  overflow-hidden z-50"
                    onMouseOver={() => setDropdownOpen(true)}
                    onMouseOut={() => setDropdownOpen(false)}
                  >
                    <div className="py-5 w-full h-full flex flex-col gap-2 justify-center items-center shadow-xl rounded-md bg-white">
                      <Link
                        href="/profile"
                        className="w-full text-center block px-4 py-2 hover:bg-gray-100 "
                        onClick={() => setDropdownOpen(false)}
                      >
                        Profile
                      </Link>

                      <Button onClick={handleLogoutClick} text="Log Out" />
                    </div>
                  </div>
                )}
              </>
            ) : (
              <Button onClick={handleLoginClick} text="Log In" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
