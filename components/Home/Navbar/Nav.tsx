"use client";

import Logo from "@/components/Helper/Logo";
import ThemeToggler from "@/components/Helper/ThemeToggler";
import { Navlinks } from "@/constant/Constant";
import { Download, MenuIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  openNav: () => void;
};

function Navbar({ openNav }: Props) {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 99) setNavBg(true);
      if (window.scrollY < 99) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all duration-200 h-[12vh] z-100 fixed w-full ${navBg ? "dark:bg-gray-800 bg-white shadow-md " : "fixed"}`}
    >
      <div className="flex items-center h-full justify-between max-w-[99%] xl:max-w-[80%] mx-auto">
        {/* navlogo */}
        <Logo />
        {/* navlink */}

        <div className="hidden lg:flex items-center space-x-10 ">
          {Navlinks.map((link, href) => (
            <Link
              className="dark:text-white text-black hover:text-yellow-500 dark:hover:text-yellow-200 font-semibold transition-all duration-200 "
              href={link.href}
              key={href}
            >
              <p>{link.name}</p>
            </Link>
          ))}
        </div>

        {/* button */}
        <div className="flex items-center space-x-4">
          {/* CV button */}
          <a
            href="#_"
            className="box-border relative z-10 inline-flex items-center justify-center w-auto px-6 sm:px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none "
          >
            <span className="relative z-20 flex items-center space-x-2 text-sm">
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </span>
          </a>
          {/* Theme toggler */}

          <ThemeToggler />
          {/* Burgar menu */}
          <MenuIcon
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-black dark:text-white lg:hidden "
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
