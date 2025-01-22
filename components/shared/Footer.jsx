"use client";
import { navLinks } from "@/constants";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const socialLinks = [
  { title: "Instagram", icon: "instagram" },
  { title: "Twitter", icon: "twitter" },
  { title: "Facebook", icon: "facebook" },
  { title: "Gmail", icon: "gmail" },
];

const Footer = () => {
  const pathname = usePathname();

  // Calculate active links directly without state
  const activeLinks = navLinks.map((link) => ({
    ...link,
    isActive:
      (pathname.includes(link.route) && link.route.length > 1) ||
      pathname === link.route,
  }));

  return (
    <footer className="bg-gray-100 text-gray-900 border-t">
      <div className="container flex flex-col items-center p-4 mx-auto md:p-8">
        <nav aria-label="Footer Navigation">
          <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
            {activeLinks.map((link) => (
              <li key={link.route}>
                <Link
                  href={link.route}
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

        <div className="flex flex-col justify-center pt-6 lg:pt-0 pb-5">
          <div className="flex justify-center space-x-4">
            {socialLinks.map(({ title, icon }) => (
              <a
                key={title}
                rel="noopener noreferrer"
                href="#"
                title={title}
                aria-label={`Visit our ${title} page`}
                className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-primary text-gray-50 hover:opacity-90 transition-opacity"
              >
                <svg fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <use href={`/icons.svg#icon-${icon}`} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="w-full border-t pt-5 flex items-center justify-center gap-3">
          <div className="text-sm text-center">
            <span>
              &copy; {new Date().getFullYear()} Wanderlust. All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
