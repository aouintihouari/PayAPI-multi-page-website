import { useState, useEffect } from "react";
import { NavLink } from "react-router";

import { cn } from "../../lib/utils.js";

import logo from "../../assets/shared/desktop/logo.svg";
import menuButton from "../../assets/shared/mobile/menu.svg";
import closeIcon from "../../assets/shared/mobile/close.svg";

import Button from "../ui/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className="font-pb-sans text-pb-sans-1 relative z-50 flex items-center justify-between bg-transparent p-4 font-bold md:p-10 lg:px-40">
      <nav className="flex items-center">
        <NavLink className="pr-10" to="/">
          <img src={logo} alt="PayAPI Logo" />
        </NavLink>

        <ul className="text-sun-juan-blue hidden items-center md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                className="text-[#36536B] opacity-70 transition duration-300 hover:opacity-100 md:ml-5 lg:ml-10"
                to={link.path}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hidden md:block">
        <Button variant="primary" className="cursor-pointer">
          Schedule a Demo
        </Button>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
          className="cursor-pointer"
        >
          <img src={menuButton} alt="" />
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] transition-opacity duration-300 md:hidden",
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-[85%] max-w-[300px] bg-[#1C232E] shadow-2xl transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="relative z-10 flex h-full flex-col px-6 py-8">
          <div className="mb-6 flex justify-end">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-300 transition-colors hover:text-white"
              aria-label="Close menu"
            >
              <img src={closeIcon} alt="close icon" />
            </button>
          </div>

          <div className="mx-2 mb-8 border-b border-gray-700/50" />

          <nav className="mb-8 flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-bold tracking-wide text-gray-300 transition-colors hover:text-white"
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="mt-4 flex w-full justify-center">
            <Button
              variant="primary"
              className="w-full justify-center shadow-lg shadow-pink-900/20"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
