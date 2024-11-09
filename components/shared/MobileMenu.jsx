import { CgMenuGridO, CgClose } from "react-icons/cg";
import { navLinks } from "@/constants";
// import Route from "../ui/Route";
import { useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import useMenuActive from "@/hooks/useMenuActive";
import clsx from "clsx";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

const MobileMenu = ({
  setShowLoginPage,
  showLoginPage,
  setLoginMode,
  handleLogin,
}) => {
  const [user, setUser] = useState();

  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const [activeLinks, setActiveLinks] = useState([]);

  useEffect(() => {
    const updatedLinks = navLinks.map((link) => ({
      ...link,
      isActive: useMenuActive(link.route), // Call the hook here inside useEffect
    }));
    setActiveLinks(updatedLinks);
  }, [navLinks]);

  const mobileMenuHandler = () => {
    setOpenMobileMenu(!openMobileMenu);
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
      <div
        className="md:hidden z-[90] absolute right-4"
        onClick={mobileMenuHandler}
      >
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
            {user && (
              <div>
                <Image src="" alt="" fill width={30} height={30} className="" />
                <h3>{user}</h3>
              </div>
            )}
            <ul className="flex items-center justify-start gap-10 flex-col  flex-1 py-5 border-b">
              {activeLinks.map((link, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={link.route}
                      onClick={() => setOpenMobileMenu(false)}
                      className={clsx(link.isActive && "text-primary ")}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-col gap-5 pb-10">
              <Button text="Log In" onClick={handleLogIn} />
              <Button text="Sign Up" onClick={handleSignup} />
            </div>
          </div>
        </div>
      )}
      {showLoginPage && (
        <div
          className="absolute flex  justify-end gap-2 max-w-[10%] z-[100] lg:hidden top-20 right-5"
          onClick={handleLogin}
        >
          <IoClose size={30} />
        </div>
      )}
    </>
  );
};

export default MobileMenu;
