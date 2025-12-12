import { useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import Button from "./Button";
import closeIcon from "../../assets/shared/mobile/close.svg";

const cn = (...inputs) => twMerge(clsx(inputs));

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const navLinks = [
    { name: "Pricing", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <div className="relative min-h-screen bg-gray-100 opacity-20">
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] transition-opacity duration-300",
          isOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-full max-w-[320px] bg-[#1C232E] shadow-2xl transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-full flex-col px-6 py-6">
          <div className="mb-4 flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-gray-400 transition-colors hover:text-white"
            >
              <img src={closeIcon} alt="close icon" />
            </button>
          </div>

          <div className="mx-2 mb-10 border-b border-gray-700/50" />

          <nav className="mb-10 flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-bold tracking-wide text-gray-300 transition-colors hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="mt-2 flex justify-center px-4">
            <Button
              variant="primary"
              className="w-full shadow-lg shadow-pink-900/20"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
