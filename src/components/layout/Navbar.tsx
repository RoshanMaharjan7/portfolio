"use client";

import Link from "next/link";
import  { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-background border-b"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto p-4 px-6 flex items-center justify-between">
        <h2 className="font-syne text-[1.7rem] font-bold flex items-center overflow-hidden">
          <span>R</span>

          <span
            className={`inline-block transition-all duration-500 ease-in-out origin-left overflow-hidden whitespace-nowrap ${scrolled ? "max-w-[0ch] opacity-0" : "max-w-[5ch] opacity-100"}`}
          >
            oshan
          </span>

          <span
            className="text-theme inline-block transition-all duration-500 ease-in-out"
          >
            M.
          </span>
        </h2>

        <ul className="flex space-x-6">
          <li>
            <Link
              href="#projects"
              className="text-gray-400  hover:text-theme hover:translate-y-1 transition-all inline-block duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="text-gray-400  hover:text-theme hover:translate-y-1 transition-all inline-block duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-gray-400  hover:text-theme hover:translate-y-1 transition-all inline-block duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
